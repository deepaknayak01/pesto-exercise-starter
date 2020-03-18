function objectInvert(...args) {
  let inputObj = args[0];
  let invertedObj = {};
  
  for(const key of Object.keys(inputObj)) {
    invertedObj[inputObj[key]] = key;
  }
  return invertedObj;
}

export {
  objectInvert,
};
