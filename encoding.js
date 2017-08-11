"use strict";

function encoding() {
    let encoding = [{num: 1, encode: ':::||'}, {num: 2, encode: '::|:|'}, {num: 3, encode: '::||:'}, {num: 4, encode: ':|::|'}
        , {num: 5, encode: ':|:|:'}, {num: 6, encode: ':||::'}, {num: 7, encode: '|:::|'}, {num: 8, encode: '|::|:'}
        , {num: 9, encode: '|:|::'}, {num: 0, encode: '||:::'}];

    return encoding.encode;
    // return "asdfe".split("")[2];
}

console.log(encoding())