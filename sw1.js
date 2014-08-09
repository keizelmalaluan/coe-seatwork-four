var drawTriangle = function(level){
	var letter = "";
	for (var i = 0; i < level; i++){
		for (var j = i; j <= i; j++){
			letter+="#";
		}

		console.log(letter);
	}
}
drawTriangle(7);