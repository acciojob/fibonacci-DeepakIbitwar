function fibonacci(num) {
// your code here
	let a=0;
	let b=1;

	for(let i=0;i<num;i++){
		console.log(a);
		let c=a+b;
		
		a=b;
		b=c;
		
	}
}

module.exports = fibonacci;
