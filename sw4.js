var countBs = function(keizel){
	var count = 0;
	for (var key in keizel){
		if(keizel[key] === "B"){
			count++;

		}
	}
	return count;
}
console.log(countBs("benok"));