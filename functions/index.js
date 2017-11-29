//libs
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const objectValues = require('object.values');
//modules
const onMessage = require('./components/onMessage');
const onParseNewTransfers = require('./components/onParseNewTransfers');
//init
objectValues.shim();

admin.initializeApp(functions.config().firebase);
console.log(JSON.stringify(functions.config().firebase,null,2));
exports.telegramWebhook = functions.https.onRequest((request, response) => {
    const text = request.body.message.text;
    const chatId = request.body.message.chat.id;
    console.log(functions.config());
    console.log(`Got message from @${request.body.message.chat.username}: ${text}`);
    return onMessage(chatId, text).then(() => {
        response.send("ok");
    });
});

exports.onParseNewTransfers = functions.https.onRequest((request, response) => {
    return onParseNewTransfers().then(()=>{
        response.send("ok");
    })
});