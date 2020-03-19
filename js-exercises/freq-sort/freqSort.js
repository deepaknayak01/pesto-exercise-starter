
function freqSort(...args) {
  let inputArray = args[0];
  
  inputArray = inputArray.filter((key, index) => 
    inputArray.lastIndexOf(key) === index
  );

  let sortedArray = inputArray.sort((prev, next) => prev < next ? 1 : -1);
  return sortedArray;
}

export {
  freqSort,
};
