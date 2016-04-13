/**
 * Created by hypers-godfery on 2015/7/10.
 */
var http = require("http");
var fs = require('fs');
var iconv = require('iconv-lite');
var cheerio = require("cheerio");


var url = "http://www.imooc.com/learn/282",
    file = "D:\\a.txt";

var txt = "";


function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $(".learnchapter");

    //[{
    //    chapterTitle:"",
    //    videos:[
    //        title:"",
    //        id:""
    //    ]
    //}]

    var courseData = [];
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find("strong").text();
        var videos = chapter.find(".video").children("li");
        var chapterData = {
            chapterTitle: "",
            videos: []
        };
        chapterData.chapterTitle = chapterTitle;
        videos.each(function(item){
            var video = $(this).find(".studyvideo");
            var videoTitle = video.text();
            var id = video.attr("href").split("video/")[1];

            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
        });

        courseData.push(chapterData);
    });

    return courseData;
}

function printCousrDataInfo(couseData){
    couseData.forEach(function(item){
       var chapterTitle = item.chapterTitle;

        txt += chapterTitle + "\r\n";
        //console.log(chapterTitle + "\n");

        item.videos.forEach(function(video){
            txt += " 【" + video.id + "】" + video.title + "\r\n";
           //console.log(" 【" + video.id + "】" + video.title + "\n");
        });
    });
}

http.get(url, function (res) {
    var html = "";

    res.on("data", function (data) {
        html += data;
    });

    res.on("end", function () {
        //console.log(html)
        var courseData= filterChapters(html);
        printCousrDataInfo(courseData);
        writeFile(file);
    });
}).on("error", function () {
    console.log("错误");
});


function writeFile(file){
    // 测试用的中文
    //var str = "\r\n我是一个人Hello myself!";
    // 把中文转换成字节数组
    var arr = iconv.encode(txt, 'gbk');
    //console.log(arr);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.writeFile(file, arr, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}
