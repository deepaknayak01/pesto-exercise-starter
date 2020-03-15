
function pathSatisfies(...args) {
  let condition = args[0];
  let arrayOfPath = args[1];
  let objtoSatisfy = args[2];
  
  for(let i = 0; i < arrayOfPath.length; i++) {
    if(typeof arrayOfPath[i] === 'number') {
      objtoSatisfy = objtoSatisfy[arrayOfPath[i]];
    } else {
      objtoSatisfy = objtoSatisfy[arrayOfPath[i]];
    }
  }
  return condition(objtoSatisfy);
}

export {
  pathSatisfies,
};
