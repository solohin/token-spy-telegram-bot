"use strict";
//libs
//modules
const onStartMessage = require('./onStartMessage');
const onWatchMessage = require('./onWatchMessage');
//init
module.exports = function (chatId, text) {
    if(text.split(' ')[0] === '/watch'){
        return onWatchMessage(chatId, text);
    }
    return onStartMessage(chatId);
};