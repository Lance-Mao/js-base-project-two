"use strict";

function zipCode(code, encoding) {
    let zipCode = code.split("");
    if (zipCode.includes('-')) {
        return notAllNumbers(zipCode, encoding);
    }
    return areNumbers(zipCode, encoding);
}

function areNumbers(zipCode, encoding) {

    let barCode = '| ';
    let sum = 0;

    for (let no of zipCode) {
        barCode += encoding.filter(item => item.num === Number(no))[0].encode + ' ';
        sum += Number(no);
    }

    barCode += encoding.filter(item => item.num === ((10 - sum % 10 ) === 10 ? 0 : (10 - sum % 10 )))[0].encode + ' |';

    return barCode;
}

function notAllNumbers(zipCode, encoding) {
    zipCode.splice(zipCode.indexOf('-'), 1) //会返回删除的这个元素

    return areNumbers(zipCode, encoding);
}

function barCode(code, encoding) {
    let barCode = code.split(" ");
    let zipCode = '';

    for (let index = 1; index < barCode.length - 2; index++) {
        if (barCode[index] !== ''){
            zipCode += encoding.filter(item => item.encode === barCode[index])[0].num
        }
    }

    if (zipCode.length >= 9){
        let str = zipCode.split("");
        str.splice(5, 0, '-');

        let strCode = str.reduce(function(accumulator, currentValue, currentIndex, array){
            return accumulator + currentValue;
        });

        return strCode
    }


    return zipCode;
}

function ismonth(str) {
    for (let ilen = 0; ilen < str.length; ilen++) {
        if (str.charAt(ilen) < '0' || str.charAt(ilen) > '9') {
            if ((str.charAt(ilen) != '-'))
                return false;
        }
    }
    return true;
}

function main(code) {

    let encoding = [{num: 1, encode: ':::||'}
        , {num: 2, encode: '::|:|'}, {num: 3, encode: '::||:'}, {num: 4, encode: ':|::|'}
        , {num: 5, encode: ':|:|:'}, {num: 6, encode: ':||::'}, {num: 7, encode: '|:::|'}
        , {num: 8, encode: '|::|:'}, {num: 9, encode: '|:|::'}, {num: 0, encode: '||:::'}];

    if (ismonth(code)) {
        return zipCode(code, encoding);
    }
    return barCode(code, encoding);
}

module.exports = main;
