"use strict";
//libs
//modules
const sendTelegramMessage = require('./sendTelegramMessage');
const admin = require('firebase-admin');
//init
module.exports = function (chatId) {
    const promise1 = sendTelegramMessage(chatId, `Привет! 
Этот бот следит за ERC-20 токенами на ETH-кошельках.

Ты в списке администраторов, поэтому можешь изменять список каналов.
Отправь чтобы следить за переводами токенов на кошельке:
\`/watch 0x83778d18a106327efd25ceeffbf3fa290ce68688 Имя для аккаунта\`

Чтобы убрать из отслеживания:
\`/stop 0x83778d18a106327efd25ceeffbf3fa290ce68688\`

В ответ будут приходить сообщения вида 
\`+ 358.78 RDN https://etherscan.io/tx/0x699c4e69ccd943b37eac67785e051e5fff2ff213863f22e73c9a2c166d22d409\`

Список подписок доступен по команде /list.`);
    const promise2 = admin.database().ref(`/listeners/${chatId}`).set('1');
    return Promise.all([promise1, promise2]);
};