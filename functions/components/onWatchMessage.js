"use strict";
//libs
const admin = require('firebase-admin');
//modules
const isAddress = require('./isAddress');
const sendTelegramMessage = require('./sendTelegramMessage');
const onParseNewTransfers = require('./onParseNewTransfers');
//init
module.exports = function (chatId, text) {
    const parsed = text.split(' ').slice(1);
    const address = parsed[0];
    const name = parsed.slice(1).join(' ') || '';
    if (!isAddress(address)) {
        return sendTelegramMessage(chatId, `\`${address}\` - это не похоже на адрес кошелька Ethereum...`);
    }
    const messagePromise = sendTelegramMessage(chatId, `Добро. Каждые 2 минуты проверяю транзакции кошелька \`${address}\``);
    const dbPromise = admin.database().ref(`/watch/${chatId}/${address}`).update({address, name});
    return Promise.all([messagePromise, dbPromise]).then(onParseNewTransfers)
};