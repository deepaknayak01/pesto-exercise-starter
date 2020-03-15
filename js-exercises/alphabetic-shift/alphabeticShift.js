const alphabeticShift = inputString => {
  let shiftedString = '';
  let shiftedChar;

  for(let i = 0; i < inputString.length; i++) {
    shiftedChar = String.fromCharCode(inputString[i].charCodeAt() + 1);
    shiftedString += shiftedChar;
  }
  return shiftedString;
};

export { alphabeticShift };
