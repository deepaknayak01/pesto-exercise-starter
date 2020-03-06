function sumPrimes(...args) {

	let num = args[0];
	let sum = 0;
	let primeNum;

	for(let i=2; i<=num; i++) {
		primeNum = isPrime(i);
		if(primeNum){
			sum += i;
		}
	}

	function isPrime(value) {
		for(let j=2; j<value; j++) {
			if(value % j === 0) {
				return false;
			}
		}
		return true;
	}
	return sum;
}

export {
  sumPrimes,
};
