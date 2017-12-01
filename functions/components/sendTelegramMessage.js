"use strict";
//libs
const request = require('request-promise');
const admin = require('firebase-admin');
//modules
const config = require('../config');
//init

const TELEGRAM_URL = 'https://api.telegram.org/bot' + config.TELEGRAM_BOT_TOKEN + '/sendMessage';

const getSubscribers = chatId => {
    if (chatId) {
        return Promise.resolve([chatId]);
    } else {
        return admin.database().ref(`/listeners/`).once('value').then(snapshot => {
            return Object.keys(snapshot.val() || {});
        });
    }
};

module.exports = function (chatId, text) {
    return getSubscribers(chatId).then(subscribers => {
        const promises = subscribers.map(subscriber => {
            return request({
                uri: TELEGRAM_URL,
                method: 'POST',
                json: true,
                body: {
                    chat_id: subscriber,
                    text,
                    parse_mode: 'Markdown',
                    disable_web_page_preview: true,
                },
                resolveWithFullResponse: true
            }).then(response => {
                if (response.statusCode >= 400) {
                    return Promise.reject(`Could not send message to ${subscriber}: ${response.body}`);
                }
            }).catch(e => {
                console.error('Ошибка отправки сообщения к ' + subscriber + e, e)
                return Promise.resolve();
            })
        });
        return Promise.all(promises)
    });
};