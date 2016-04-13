/**
 * Created by hypers-godfery on 2015/7/10.
 */
var http = require("http");
var fs = require('fs');
var iconv = require('iconv-lite');
var cheerio = require("cheerio");


var url = "http://192.168.1.122/1.html",
    file = "D:\\a.txt";

var txt = "";


function filterChapters(html) {
    var $ = cheerio.load(html);

    var table = $("table.wikitable")[0],
        _th = $(table).find("tr th"),
        _tr = $(table).find("tr");
    for (var _thi = 0; _thi < _th.length; _thi++) {
        var _td = $(table).find('tr td:nth-child(' + (_thi+1) + ')');
        //return;
        var _i = 0;
        while (_i < _td.length) {
            var $that = $(_td[_i]),
                _rowspan = +$that.attr("rowspan");
            if (isNaN(_rowspan)) {
                _i++;
                continue;
            }
            for (var _j = 1; _j < _rowspan; _j++) {
                $(table).find('tr:nth-child(' + (_i + 1) + ') td:nth-child(' + _thi+1 + ')').prepend('<td>' + $that.text() + '</td>');
            }
            $that.removeAttr("rowspan");
            _i += _rowspan;

        }
    }
    console.log($(table).html());
}


http.get(url, function (res) {
    var html = "";

    res.on("data", function (data) {
        html += data;
    });

    res.on("end", function () {
        var courseData = filterChapters(html);
    });
}).on("error", function () {
    console.log("错误");
});


function writeFile(file) {
    // 测试用的中文
    //var str = "\r\n我是一个人Hello myself!";
    // 把中文转换成字节数组
    var arr = iconv.encode(txt, 'gbk');
    //console.log(arr);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.writeFile(file, arr, function (err) {
        if (err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}
