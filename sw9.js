var isLeap = function (year){
	var g = "";
	if (year % 4 === 0){
		g = year + " is a leap year!";
		return g;
	}
	else
	{
		g = year + " is not a leap year!";
		return g;
	}
}
console.log(isLeap(2014));