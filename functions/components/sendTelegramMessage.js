"use strict";
//libs
const request = require('request-promise');
const functions = require('firebase-functions');
//modules
const config = require('../config');
//init

const TELEGRAM_URL = 'https://api.telegram.org/bot' + config.TELEGRAM_BOT_TOKEN + '/sendMessage';
module.exports = function (chatId, text) {
    console.log('Sending to ' + chatId + ' text: ' + text);
    return request({
        uri: TELEGRAM_URL,
        method: 'POST',
        json: true,
        body: {
            chat_id: chatId,
            text,
            parse_mode: 'Markdown'
        },
        resolveWithFullResponse: true
    }).then(response => {
        if (response.statusCode >= 400) {
            throw new Error(`Could not send message: ${response.body}`);
        }
    });
};