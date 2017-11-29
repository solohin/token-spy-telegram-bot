"use strict";
//libs
//modules
const onStartMessage = require('./onStartMessage');
const onAdminStartMessage = require('./onAdminStartMessage');
const onWatchMessage = require('./onWatchMessage');
const onListMessage = require('./onListMessage');
const onUnkownMessage = require('./onUnkownMessage');
const onStopMessage = require('./onStopMessage');
const isAdmin = require('./isAdmin');
//init
module.exports = function (chatId, text) {
    if (text.split(' ')[0] === '/watch' && isAdmin(chatId)) {
        return onWatchMessage(chatId, text);
    }
    if (text.split(' ')[0] === '/stop' && isAdmin(chatId)) {
        return onStopMessage(chatId, text);
    }
    if (text.split(' ')[0] === '/list') {
        return onListMessage(chatId, text);
    }
    if (text.split(' ')[0] === '/start') {
        if(isAdmin(chatId)){
            return onAdminStartMessage(chatId);
        }else{
            return onStartMessage(chatId);
        }
    }
    return onUnkownMessage(chatId);
};