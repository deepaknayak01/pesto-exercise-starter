
function lastIndexOf(...args) {
  let elementToFind = args[0];
  let inputArray = args[1];
  let lastIndex = -1;

  for(var index = 0; index < inputArray.length; index++) {
    if(inputArray[index] === elementToFind) {
      lastIndex = index;
    }
  }
  return lastIndex;
}

export {
  lastIndexOf,
};
