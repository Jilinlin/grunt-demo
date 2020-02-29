#!/usr/bin/node
//nodejs Javascipt运行的脚本解释器

// process全局对象 当前脚本的进程 argv命令行参数
//一、数据合法性检验
if(process.argv.length!=4){
    console.log('sun x y');
    process.exit(1);
}
//二、数值转换
var x = Number(process.argv[2]),
    y = Number(process.argv[3]);

// 五、调用模块
const add = require('./calc.js');
//三、控制台输出
console.log(`${x}+${y}=${add(x,y)}`);

//四、函数部分 测试模块
// function add(x,y){
//     if((typeof x)==='number' && (typeof y)==='number')
//         return x+y;
//     else
//         return NaN;
// }