function isTriangle(...sides) {
	if(sides.length !== 3) {
		return false;
	}
	if(!(sides[0] + sides[1] > sides[2] && sides[1] + sides[2] > sides[0] && sides[0] + sides[2] > sides[1])){
		return false;
	}
	return true;
}

export {
  isTriangle,
};
