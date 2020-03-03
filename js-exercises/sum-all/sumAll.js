function sumAll(...args) {
	
	let sum = 0;
	let low, high;
	let arr = args[0];

	if(arr.length !== 2) {
		return 0;
	}
	if(arr[0] > arr[1]) {
		low = arr[1];
		high = arr[0];
	} else {
		low = arr[0];
		high = arr[1];
	}
	for(low;low <= high;low++) {
		sum += low;
	}
  	return sum;
}

export {
  sumAll,
};
