function aperture(...args) {
  let tupleCount = args[0];
  let inputArray = args[1];
  let arrayOfTuples = [];
  let noOfTuples = inputArray.length - (tupleCount - 1);
  let arrayOfItems = [];
  let item = 0;

  if(tupleCount > inputArray.length || inputArray.length === 0) {
    return arrayOfTuples;
  }

  for(let i = 0; i < noOfTuples; i++) {
    arrayOfItems = [];
    item = i;
    for(let j = 0; j < tupleCount; j++) {
      arrayOfItems.push(inputArray[item]);
      item++;
    }
    arrayOfTuples.push(arrayOfItems);
  }

  return arrayOfTuples;
}

export { aperture };
