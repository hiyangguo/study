/**
 * Created by yangguo on 2015/8/10 0010.
 */
var http = require('http');
var querystring = require('querystring');

var config = {
    times: 200, //一秒请求的次数
    zid: "5745964" //投票id
}


var post_data = querystring.stringify({
    "action": "zlmon",
    "zid": 5745964,
    "SjTime": 1439200131609
});

var count = 0;

var options = {
    hostname: 'zlhb080933.duapp.com',
    port: 80,
    path: '/getmon.php',
    method: 'POST',
    headers: {
        'Host': 'zlhb080933.duapp.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Connection': 'keep-alive',
        'Referer': 'http://zlhb080933.duapp.com/index.php?zid=' + config.zid,
        'Content-Length': 45,
        'Origin': 'http://zlhb080933.duapp.com',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
    }
};

setInterval(function () {
    start();
}, Math.floor(1000 / config.times));


function start() {
    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);
            console.log(++count);
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

    });
    req.write(post_data);
    req.end();
}