/**
 * Created by hypers-godfery on 2015/7/8.
 */


var klass = require("./class");

klass.add("Teahcher",["小明","小红"]);


exports.add = function(classes){
	classes.forEach(function(item,index){
		var _klass =item;
		var teacherName = item.teacherName;
		var students = item.students;
	});
}
