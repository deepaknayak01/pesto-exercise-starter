function sumFibs(...args) {

	let sum = 0;
	let num = args[0];
	let current = 1;
	let prev = 0;
	let next;

	for(current; current <= num;) {
		next = current + prev;
		prev = current;

		if(current % 2 !== 0) {
			sum += current;
		}
		current = next;
	}
	return sum;
}

export {
  sumFibs,
};
