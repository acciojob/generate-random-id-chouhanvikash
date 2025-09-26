function makeid(l) {
  // write your code here
	let res="";
	let char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
	for(i=0;i<l;i++)
		{
		res+=char_list.charAt(
			Math.floor(Math.random()*l))	;
		}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
