/**
 * Created by hypers-godfery on 2015/7/31.
 */
function getColor (){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}

setInterval(function(){
    $("#yufeng").css({
        "color":getColor()
    });
},1000);
