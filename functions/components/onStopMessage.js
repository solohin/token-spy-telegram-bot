"use strict";
//libs
const admin = require('firebase-admin');
//modules
const onListMessage = require('./onListMessage');
const sendTelegramMessage = require('./sendTelegramMessage');
//init
module.exports = function (chatId, text) {
    const parsed = text.split(' ').slice(1);
    const address = parsed[0];

    return admin.database().ref(`/watch_global/${address}`).set(null).then(() => {
        return sendTelegramMessage(chatId, `Больше не следим за ${address}`);
    }).then(() => {
        return onListMessage(chatId);
    })
};