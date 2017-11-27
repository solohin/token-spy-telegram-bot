//libs
const functions = require('firebase-functions');
const admin = require('firebase-admin');
//modules
const onMessage = require('./components/onMessage');
//init
admin.initializeApp(functions.config().firebase);

exports.telegramWebhook = functions.https.onRequest((request, response) => {
    const text = request.body.message.text;
    const chatId = request.body.message.chat.id;
    console.log(functions.config());
    console.log(`Got message from @${request.body.message.chat.username}: ${text}`);
    return onMessage(chatId, text).then(() => {
        response.send("ok");
    });
});
