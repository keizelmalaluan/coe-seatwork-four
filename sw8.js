var joinArray = function (kei, bnk){
	var sg = "";
	for (i = 0; i < kei.length-1; i++){
		sg +=kei[i] + bnk;
	}
	sg+=kei[kei.length-1];
		console.log(sg);
}
var myColor = ["nblu","red"];
joinArray(myColor, '=');