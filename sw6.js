var reverseString = function (reverse){
	var baliktad = "";
	for (var i = 1; i <= reverse.length; i++){
		var kei = reverse.length - i;
		baliktad+=reverse[kei];
	}
	console.log(baliktad);
}
reverseString("Keizel Malaluan");