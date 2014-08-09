var convertFirstLetter = function(pogi){
	{
		var kei = pogi.split(" ");
		for (var i=0; i < kei.length; i++){
			var j = kei[i].charAt(0).toUpperCase();
			kei[i]=j+kei[i].substr(1);
		}
return kei.join(" ");
	}
}
convertFirstLetter("ang pogi pogi ko");