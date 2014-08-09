var countBs = function(keizel, benok){
	var count = 0;
	for (var key in keizel){
		if(keizel[key] === benok){
			count++;

		}
	}
	return count;
}
console.log(countBs("kikay", "k"));