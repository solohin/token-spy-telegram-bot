"use strict";
//libs
//modules
//init
module.exports = function (ts, addTime = true) {
    const dateObject = new Date(ts);
    const addZero = number => number >= 10 ? number : '0' + number;
    let result = `${addZero(dateObject.getDate())}.${addZero(dateObject.getMonth() + 1)}.${addZero(dateObject.getFullYear())}`;

    if (addTime) {
        result += ` ${addZero(dateObject.getHours())}:${addZero(dateObject.getMinutes())}`;
    }
    return result;
}