"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例校验码中有-", function(){

        var result = main('25-6841');
        var expect_string = '| ::|:| :|:|: :||:: |::|: :|::| :::|| :|::| |';
        
        expect(expect_string).to.equal(result);
    });


    it("测试用例校验码为0时", function(){

        var result = main('91523');
        var expect_string = '| |:|:: :::|| :|:|: ::|:| ::||: ||::: |';

        expect(expect_string).to.equal(result);
    });

    it("测试用例校验码不为为0时", function(){

        var result = main('91528');
        var expect_string = '| |:|:: :::|| :|:|: ::|:| |::|: :|:|: |';

        expect(expect_string).to.equal(result);
    });

    it("测试用例输入的条码转回邮编后位数等于9加入“-”", function(){

        var result = main('| ::|:| :|:|: :||:: |::|: :|::| :::|| :|::| :|::| :|::| :|::| |');
        var expect_string = '25684-1444';

        expect(expect_string).to.equal(result);
    });

    it("测试用例输入的条码转回邮编后位数等于5不加入“-”", function(){

        var result = main('| ::|:| :|:|: :||:: |::|: :|::| :::|| |');
        var expect_string = '25684';

        expect(expect_string).to.equal(result);
    });

});