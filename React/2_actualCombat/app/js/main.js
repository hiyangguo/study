/**
 * Created by yangguo on 2015/9/9 0009.
 */
var React = require('react');
var QuestionApp = require('./components/QuestionApp.js')
var mainCom = React.render(
    <QuestionApp />,
    document.getElementById("app")
);
