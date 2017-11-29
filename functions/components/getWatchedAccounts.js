"use strict";
//libs
//modules
const admin = require('firebase-admin');
//init
module.exports = function () {
    return admin.database().ref(`/watch_global/`).once('value').then(snapshot => {
        return Object.values(snapshot.val() || {});
    });
};