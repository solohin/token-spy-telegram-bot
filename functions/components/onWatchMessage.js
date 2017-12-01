"use strict";
//libs
const admin = require('firebase-admin');
//modules
const isAddress = require('./isAddress');
const sendTelegramMessage = require('./sendTelegramMessage');
//init
module.exports = function (chatId, text) {
    const parsed = text.split(' ').slice(1);
    const address = parsed[0];
    const name = parsed.slice(1).join(' ') || '';
    if (!isAddress(address)) {
        return sendTelegramMessage(chatId, `\`${address}\` - это не похоже на адрес кошелька Ethereum...`);
    }
    const messagePromise1 = sendTelegramMessage(chatId, `Добро. Теперь проверяю транзакции кошелька \`${address}\`. Все подписчики бота будут получать по нему уведомления.`);
    const messagePromise2 = sendTelegramMessage(null, `Кошелек \`${address}\` добавлен в отслеживание.`);
    const dbPromise = admin.database().ref(`/watch_global/${address}`).update({address, name});
    return Promise.all([messagePromise1, messagePromise2, dbPromise])
};