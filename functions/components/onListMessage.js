"use strict";
//libs
const admin = require('firebase-admin');
//modules
const isAddress = require('./isAddress');
const sendTelegramMessage = require('./sendTelegramMessage');
//init
module.exports = function (chatId) {
    return admin.database().ref(`/watch_global/`).once('value').then(snapshot => {
        const list = Object.values(snapshot.val() || {});
        let message = list.length > 0
            ? 'Отслеживаем кошельки\n' + list.map(item => {
            return `- [${item.address}](https://etherscan.io/address/${item.address}) ${item.name ? `(${item.name})` : ''}`
        }).join('\n')
            : 'Нет адресов для отслеживания';

        return sendTelegramMessage(chatId, message);
    });
};