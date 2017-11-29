"use strict";
//libs
const admin = require('firebase-admin');
//modules
const getWatchedAccounts = require('./getWatchedAccounts');
const getNewTransfers = require('./getNewTransfers');
const sendTelegramMessage = require('./sendTelegramMessage');
const simpleDateFormat = require('./simpleDateFormat');
//init

const sendMessage = (address, name, {timestamp, transactionHash, token, value, valueInUSD, incoming}) => {
    const text = `${incoming ? '+' : '-'}${value} ${token} ${valueInUSD === null ? '' : `($${valueInUSD})`} ${simpleDateFormat(timestamp * 1000)}
${name ? `${name} ` : ''}[${address}](https://etherscan.io/address/${address}) 
[https://etherscan.io/tx/${transactionHash}](https://etherscan.io/tx/${transactionHash})`;
    return sendTelegramMessage(null, text);
};

const handleOne = ({address, name, lastTs}) => {
    return getNewTransfers(address, lastTs).then(transfers => {
        if (transfers.length === 0)
            return;

        if (!lastTs)
            transfers = transfers.slice(0, 1);

        const promises = transfers.map(transfer => sendMessage(chatId, address, name, transfer));
        promises.push(admin.database().ref(`/watch_global/${address}/lastTs`).set(transfers[0].timestamp));

        return Promise.all(promises);
    })
};

module.exports = function () {
    return getWatchedAccounts().then(accounts => {
        return Promise.all(accounts.map(handleOne));
    })
};