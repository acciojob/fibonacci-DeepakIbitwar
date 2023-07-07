function fibonacci(num) {
// your code here
	var a=0;
	var b=1;

	for(let i=0;i<num;i++){
		console.log(a);
		var c=a+b;
		
		a=b;
		b=c;
		
	}
}

module.exports = fibonacci;
