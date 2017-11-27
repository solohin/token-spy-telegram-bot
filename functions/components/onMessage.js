"use strict";
//libs
//modules
const onStartMessage = require('./onStartMessage');
const onWatchMessage = require('./onWatchMessage');
const onListMessage = require('./onListMessage');
//init
module.exports = function (chatId, text) {
    if(text.split(' ')[0] === '/watch'){
        return onWatchMessage(chatId, text);
    }
    if(text.split(' ')[0] === '/list'){
        return onListMessage(chatId, text);
    }
    return onStartMessage(chatId);
};