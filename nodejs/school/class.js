/**
 * Created by hypers-godfery on 2015/7/8.
 */
var student = require("./student");
var teacher = require("./teacher");

function add (teacherName,students){
	teacher.add(teacherName);

	students.forEach(function(item,index){
		student.add(item);
	});
}

exports.add = add;
