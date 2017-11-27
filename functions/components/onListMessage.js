"use strict";
//libs
const admin = require('firebase-admin');
//modules
const isAddress = require('./isAddress');
const sendTelegramMessage = require('./sendTelegramMessage');
//init
module.exports = function (chatId) {
    return admin.database().ref(`/watch/${chatId}`).once('value').then(snapshot => {
        const list = Object.values(snapshot.val());
        const message = 'Вы следите за\n' + list.map(item => {
            return `- [${item.address}](https://etherscan.io/address/${item.address}) ${item.name ? `(${item.name})` : ''}`
        }).join('\n');
        return sendTelegramMessage(chatId, message);
    });
};