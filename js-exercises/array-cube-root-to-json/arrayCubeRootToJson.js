const arrayCubeRootToJson = arrayOfNumbers => {
  let objOfCubeRoot = {};
  let throwException = false;

  if(arrayOfNumbers.some(isNaN) || !arrayOfNumbers.length || arrayOfNumbers.indexOf(null) > -1) {
    throwException = true;
  }

  if(throwException) {
    throw new Error('message');
  }

  for(let i = 0; i < arrayOfNumbers.length; i++) {
    objOfCubeRoot[arrayOfNumbers[i]] = Math.cbrt(arrayOfNumbers[i]);
  }
  return objOfCubeRoot;
};

export { arrayCubeRootToJson };
