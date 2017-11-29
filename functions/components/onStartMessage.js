"use strict";
//libs
//modules
const sendTelegramMessage = require('./sendTelegramMessage');
const admin = require('firebase-admin');
//init
module.exports = function (chatId) {
    const promise1 = sendTelegramMessage(chatId, `Привет! 
Этот бот следит за ERC-20 токенами на ETH-кошельках.

/list - отобразить список подписок`);
    const promise2 = admin.database().ref(`/listeners/${chatId}`).set('1');
    return Promise.all([promise1, promise2]);
};