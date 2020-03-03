
function duplicateLetters(...args) {
	let count = 0;
	let split = args[0].split('');
	let pattern;
	let pattern_count = 0;

	for(let j=0; j < split.length; j++) {
		pattern = new RegExp(split[j],'g');
		pattern_count = (args[0].match(pattern) || []).length;

		if(pattern_count > count) {
			count = pattern_count;
		}
	}
 	return count > 1 ? count : false;
}

export {
  duplicateLetters,
};
