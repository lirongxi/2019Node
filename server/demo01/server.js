// 声明http协议
const http = require("http");
// 声明文件操作系统对象
const fs = require("fs");
// const process = require("process");

// 设置端口
const post = 8888;
http.createServer((request, response) => {
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 可根据request.url中url判断跳转页面
	const url = request.url;
	// console.log(request.url)
	// 内容类型: text/plain
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	if(url === '/' || url === '/index'){
		fs.readFile('../../web/demo01/index.html', 'utf-8', (err, data) => {
			if (err) {
				throw err;
			}
			// 发送响应数据
			response.write(data);
			// 结束
			response.end();
		})
	}else{
		fs.readFile('../../web/demo01/about.html', 'utf-8', (err, data) => {
			if (err) {
				throw err;
			}
			// 发送响应数据
			response.write(data);
			// 结束
			response.end();
		})
	}
	
}).listen(post);
// 终端打印如下信息
console.log("Server running at http://127.0.0.1:" + post + "/");
// process.exitCode = 1
// process.exit(1)