/**
 * Created by YangGuo on 2015/8/10 0010.
 */
var http = require('http');
var path = require('path');
var fs = require("fs");

// url http://xuegong.stiei.edu.cn:9091/framework/stuphoto/2012140242.jpg

var config = {
    dir: "E:\\nodeTest\\test1\\",
    code: [2012140001, 2012140999]
}

mkdirsSync(config.dir);

for (var i = config.code[0], len = config.code[1]; i <= len; i++) {
    var studentNum = "http://xuegong.stiei.edu.cn:9091/framework/stuphoto/" + i + ".jpg";
    getImg(studentNum);
}


function getImg(httpPath) {
    http.get(httpPath, function (res) {
        //console.log(res.headers["content-type"]);
        if (res.statusCode === 200 && res.headers["content-type"] === "image/jpeg") {
            var imgData = "";
            res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
            res.on("data", function (chunk) {
                imgData += chunk;
            });
            res.on("end", function () {
                console.log("file:" + path.basename(httpPath));
                fs.writeFile(config.dir + path.basename(httpPath), imgData, "binary", function (err) {
                    if (err) {
                        console.log("down fail :" + err);
                    }
                    console.log("down success, file:" + path.basename(httpPath));
                });
            });
        }
    });
}

//递归创建目录 同步方法
function mkdirsSync(dirpath) {
    //console.log(dirname);
    if (fs.existsSync(dirpath)) {
        console.log("文件夹路径已存在");
        return true;
    }

    if (mkdirsSync(path.dirname(dirpath))) {
        fs.mkdirSync(dirpath);
        console.log("文件夹路径创建成功");
        return true;
    }

}