//前台发送 post请求
var test = require('../test');

var data={"lineID":"1"}
var host="127.0.0.1"
var port='81';
var url="/machine/list"
var callback = function(data){
	console.log("接到了服务器发来的数据");
	console.dir(data);
}

test.post(host,port,url,data,callback);
