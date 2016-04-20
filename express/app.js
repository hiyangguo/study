/**
 * Created by yangguo on 2016/4/21 0021.
 */
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function (req, res) {
    var str = req.query.params;
    console.log(str);
    res.send(str);
});

var server = app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
