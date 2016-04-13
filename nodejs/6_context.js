//var Pet = {
//	words:"...",
//	speak: function (  ) {
//		console.log(this.words);
//		console.log(this === pet);
//	}
//}
//
//pet.speak();

//function pet(words){
//	this.words = words;
//
//	console.log(this.words);
//	console.log(this === global);
//}
//
//pet("...");

/**
 * [Pet description]
 * @param {[string]} words [description]
 */
function Pet(words){
	this.words = words;
	this.speak = function(){
		console.log(this.words);
	}
}

var cat = new Pet("Hello");
cat.speak();
