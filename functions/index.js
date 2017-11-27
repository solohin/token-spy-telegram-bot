//libs
const functions = require('firebase-functions');
//modules
const onMessage = require('./components/onMessage');
//init

exports.telegramWebhook = functions.https.onRequest((request, response) => {
    const text = request.body.message.text;
    const chatId = request.body.message.chat.id;
    console.log(functions.config());
    console.log(`Got message from @${request.body.message.chat.username}: ${text}`);
    return onMessage(text, chatId).then(()=>{
        response.send("ok");
    });
});
