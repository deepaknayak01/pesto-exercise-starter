
function forEach(inputArr, callback) {
  for(let index=0; index < inputArr.length; index++) {
    callback(inputArr[index], index, inputArr);
  }
}

function map(input, callback) {
  let resultMap = [];
  
  for(let index=0; index < input.length; index++) {
    resultMap.push(callback(input[index], index, input));
  }
  return resultMap;
}

function filter(input, callback) {
  let resultMap = [];
  
  for(let index=0; index < input.length; index++) {
    if(callback(input[index])) {
      resultMap.push(input[index]);
    }
  }
  return resultMap;
}

function reduce(input, reducer, initialValue){
  let total = 0;
  let index = initialValue || 0;
  
  for(index; index < input.length; index++) {
    total = reducer(total, input[index]);
  }
  return total;
}

export {
  forEach,
  map,
  filter,
  reduce,
}