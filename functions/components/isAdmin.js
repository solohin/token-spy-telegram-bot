"use strict";
//libs
//modules
//init
module.exports = function (chatId) {
    if (!chatId) throw 'ChatID is empty';
    return [96351452, 135897625].indexOf(parseInt(chatId)) !== -1;
};