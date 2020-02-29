#!/usr/bin/node
// node解释器的文件路径

// 服务器端完成矩形的周长代码计算

// 服务器端API代码
const http = require('http'),//http服务
      url  = require('url'),//地址解析 得到字符串
      qs   = require('querystring');//解析得到对象

http.createServer((req, res) => {//创建服务
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);//请求起始行
  console.log(req.headers);//请求头
  console.log();

  //获得请求参数
  var addr = url.parse(req.url);//URL解析 得到地址对象
  var rect = qs.parse(addr.query);//得到查询字符串 解析得到简单对象 两个健值对rect.width rect.height

  var r = {//运算
    'area': Number(rect.width) * Number(rect.height),
    'perimeter': 2 * (Number(rect.width) + Number(rect.height))
  }

  res.end(JSON.stringify(r));//转换程JSON字符串 并响应
}).listen(8080);

process.on('stop', function() {
  console.log('服务被停止运行！');
  process.exit();
})