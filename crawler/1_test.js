/**
 * Created by yangguo on 2016/7/25 0025.
 */

var http = require("http");
var fs = require("fs");
var request = require('superagent');
var cheerio = require('cheerio');

request
    .get('http://www.imooc.com/')
    .set({
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, sdch',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Host': 'jd.com',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    })
    .end(function(err, res) {
        //console.log(res.text);
        var $ = cheerio.load(res.text);
        var items = [];
        $('.recomendContent .box').each((idx, element)=> {
            var $element = $(element);
            var text = $element.find('.box_body p.title').text();
            var imgSrc = $element.find('img').attr('src');
            items.push({
                text: text,
                img: imgSrc
            });
        });

        items.forEach((o)=> {
            var src = o.img;
            var fileName = o.text + src.substr(src.lastIndexOf("\."));
            getImg(o.img, fileName);
        });
    });


function getImg(src, fileName) {
    request
        .get(src)
        .end((err, res)=> {
            if (err) {
                console.log(err);
            }

            fs.writeFile(`output/${fileName}`, res.body, "binary", function(err) {
                if (err) {
                    console.log("down fail :" + err);
                }
                console.log(`down success:${fileName}`);
            });
        });
}
