const add = require('../calc.js');//被测方法引进来
      expect = require('chai').expect;//需要except断言库

describe('加法函数的单元测试',function(){
    it('0+0=0',function(){
        expect(add(0,0)).to.be.equal(0);
    });//一个it是一个测试用例

    it('3+5=8',function(){
        expect(add(3,5)).to.be.equal(8);
    });//参数：测试用例的描述和函数

    it('a+b=NaN',function(){
        expect(isNaN(add('a','b'))).to.be.ok;
    });//增加测试用例 以便于全部覆盖
});//测试套件的名称和测试套件