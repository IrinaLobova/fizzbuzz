
function range(start, end) {
	var myarray = [];
	for (i = start; i <= end; i++) {
		myarray.push(i);
	}
	return myarray;
}
 
function fizzbuzz(e){
	if (e % 15 == 0)
		return "FizzBuzz"; 
	if (e % 3 == 0)
		return "Fizz";
	if (e % 5 == 0)
		return "Buzz";
	return e;
}

(function(){
	var iarray = range(1,15).map(fizzbuzz);
	//print to the page
	var list = document.createElement("div");
	document.getElementsByClassName("container")[0].appendChild(list);
	list.innerHTML = iarray.toString().split(",").join(", ");
})();

