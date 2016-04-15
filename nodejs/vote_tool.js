/**
 * Created by yangguo on 2015/8/10 0010.
 */
var http = require('http');
var querystring = require('querystring');

var config = {
    //每分钟投几票
    times: 500,
    //投到多少票
    count: 100
};

//已投多少票
var _count = 0;

var post_data = querystring.stringify({
    'id': '111954'
});

(function() {
    //定时执行
    var time = setInterval(function() {
        start();
        if (config.count - 1 === _count) {
            clearInterval(time);
        }
    }, Math.floor(1000 * 60 / config.times));
})()


//伪造ip
function getIp() {
    var _ip = function() {
        var max = 255;
        var min = 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    var ip = "";
    for (var i = 0; i < 4; i++) {
        ip += _ip();
        if (i < 3) {
            ip += "."
        }
    }

    return ip;
}

//生成随机cookie
function getRandom() {
    var _rand1 = (Math.random() * 1E18).toString(36).slice(0, 12).toLowerCase();
    var _rand2 = (Math.random() * 1E18).toString(36).slice(0, 11).toLowerCase();
    return _rand1 + _rand2;
}

function start() {
    var randomCookie = getRandom();
    var randomIp = getIp();
    var options = {
        hostname: 'weixin3.hfurl.cc',
        port: 80,
        path: '/hefei_cc/toupiao_interface.php',
        method: 'POST',
        headers: {
            'Host': 'weixin3.hfurl.cc',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'deflate',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Connection': 'keep-alive',
            'Referer': 'http://weixin3.hfurl.cc/index.php?plg_nld=1&plg_auth=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_auth=1&q=111954&plg_dev=1&plg_nld=1&plg_usr=1&plg_vkey=1',
            'Content-Length': 9,
            'Cookie': 'PHPSESSID=' + randomCookie,
            'X-Forwarded-For': randomIp,
            'CLIENT_IP': randomIp,
            'VIA': randomIp,
            'REMOTE_ADDR': randomIp,
        }
    };
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            var hexToDec = function(str) {
                str = str.replace(/\\/g, "%");
                return unescape(str);
            }
            _count++;
            console.log(hexToDec(chunk));
        }).on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    });
    req.write(post_data);
    req.end();
}
