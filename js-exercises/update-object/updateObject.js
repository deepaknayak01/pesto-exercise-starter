
function updateObject(...args) {
  let indexToReplace = args[0];
  let strToBeReplaced = args[1];
  let arrInput = args[2];

  if(indexToReplace === -1) {
    arrInput[arrInput.length - 1] = strToBeReplaced;
  } else {
    arrInput[indexToReplace] = strToBeReplaced;
  }
  return arrInput;
}

export {
  updateObject,
};
