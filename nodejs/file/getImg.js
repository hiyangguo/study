/**
 * Created by YangGuo on 2015/8/10 0010.
 */
var http = require("http");
var fs = require("fs");

//var server = http.createServer(function(req, res){}).listen(50082);
//console.log("http start");


var url = "http://static.mukewang.com/static/img/common/logo.png";
http.get(url, function (res) {
    var imgData = "";

    res.setEncoding("binary"); //һ��Ҫ����response�ı���Ϊbinary���������������ͼƬ�򲻿�
    res.on("data", function (chunk) {
        imgData += chunk;
    });
    res.on("end", function () {
        fs.writeFile("E:\\nodeTest\\logo_white.png", imgData, "binary", function (err) {
            if (err) {
                console.log("down fail :" + err);
            }
            console.log("down success");
        });
    });
});