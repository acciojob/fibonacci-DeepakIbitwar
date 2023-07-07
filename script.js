function fibonacci(num) {
// your code here
	var a=0;
	var b=1;
	var c;

	for(let i=0;i<num;i++){
		console.log(a);
		c=a+b;
		
		a=b;
		b=c;
		
	}
}

module.exports = fibonacci;
