"use strict";
//libs
const request = require('request-promise');
//modules
//init

const round = val => Math.round(val * 100) / 100;

module.exports = function (account, lastTs) {
    const URL = `https://api.ethplorer.io/getAddressHistory/${account}?apiKey=freekey&limit=20`;
    return request({
        uri: URL,
        resolveWithFullResponse: true
    }).then(response => {
        if (response.statusCode >= 400) {
            throw new Error(`Could check: ${response.body}`);
        }
        const operations = JSON.parse(response.body).operations;

        const result = [];

        for (let key in operations) {
            if (!operations[key].tokenInfo) continue;
            if (parseInt(operations[key].timestamp) === parseInt(lastTs)) {
                break;
            }

            const decimals = parseInt(operations[key].tokenInfo.decimals);
            const delimeter = parseInt('1' + '0'.repeat(decimals));
            const value = round(operations[key].value / delimeter);

            const valueInUSD = operations[key].tokenInfo.price
                ? round(parseFloat(operations[key].tokenInfo.price.rate) * (value))
                : null;

            console.log(operations[key]);

            result.push({
                timestamp: operations[key].timestamp,
                transactionHash: operations[key].transactionHash,
                token: operations[key].tokenInfo.symbol,
                value,
                valueInUSD: valueInUSD,
                incoming: operations[key].to.toLowerCase() === account.toLowerCase(),
            })
        }
        return result;
    });
};