var Pet = {
	words : "...",
	speak : function(say){
		console.log(say + " " +this.words);
	}
}

var dog = {
	words:"Wang"
}

Pet.speak.call(dog,"speak");
