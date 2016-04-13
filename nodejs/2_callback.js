/**
 * Created by hypers-godfery on 2015/7/10.
 */
function learn(something){
	console.log(something);
}

function we(callback,something){
	something += " is cool";
	callback(something);
}

we(learn,"Nodejs");

we(function(somethin){
	console.log(somethin)
},"jade");
