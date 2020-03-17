function bizarreStringIncrementer(inputString) {
  let numberAtEndOfString = inputString.match(/\d+$/);
  let incrementedNumber;
  let formattedString;

  if(numberAtEndOfString) {
    numberAtEndOfString = numberAtEndOfString[0];
    incrementedNumber = parseInt(numberAtEndOfString) + 1;
    formattedString = inputString.split(numberAtEndOfString)[0];

    padZeroAtEnd();
    formattedString += incrementedNumber;
  } else {
    formattedString = inputString + '1';
  }
  return formattedString;

  function padZeroAtEnd() {
    let noOfLeadingZeros = numberAtEndOfString.length - incrementedNumber.toString().length;

    if(noOfLeadingZeros) {
      while(noOfLeadingZeros > 0) {
        formattedString += '0';
        --noOfLeadingZeros;
      }
    }
  }
}

export { bizarreStringIncrementer };