"use strict";
//libs
//modules
const admin = require('firebase-admin');
//init
module.exports = function () {
    return admin.database().ref(`/watch/`).once('value').then(snapshot => {
        const accounts = [];
        const data = snapshot.val()||{};
        Object.keys(data).map(chatId=>{
            Object.values(data[chatId]).map(account=>{
                accounts.push(Object.assign({},account,{chatId}));
            })
        });
        return accounts;
    });
};