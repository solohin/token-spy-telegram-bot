"use strict";
//libs
//modules
const sendStartMessage = require('./sendStartMessage');
//init
module.exports = function (text, chatId) {
    return sendStartMessage(chatId);
};