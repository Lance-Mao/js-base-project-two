"use strict";

function demo() {
    let num = [2, 5, 6, 8, 4, 1,'-'];
        // let encoding = [{num: 1, encode: ':::||'}, {num: 2, encode: '::|:|'}, {num: 3, encode: '::||:'}, {num: 4, encode: ':|::|'}
    //     , {num: 5, encode: ':|:|:'}, {num: 6, encode: ':||::'}, {num: 7, encode: '|:::|'}, {num: 8, encode: '|::|:'}
    //     , {num: 9, encode: '|:|::'}, {num: 0, encode: '||:::'}];
    //
    // let code = '|   ';
    // let sum = 0;
    // for (let no of num) {
    //     code += encoding.filter(item => item.num === no)[0].encode + '  ';
    //     sum += no;
    // }
    //
    // code += encoding.filter(item => item.num === (10 - sum % 10 ))[0].encode + '   |';


    // return 'asd-sad'.includes('-');
    // return num.indexOf('-');
    // num = num.splice(num.indexOf('-'), 1);
    // let list = num.splice(num.indexOf('-'),1);
    // return num;
    // return num.remove('-')
    return '|   ::|:|  :|:|:  :||::  |::|:  :|::|  :::||  :|::|   |'.split("  ")[5];
    // return code;
}

console.log(demo())