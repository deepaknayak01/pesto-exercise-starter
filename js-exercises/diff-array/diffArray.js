'use strict';
function diffArray(...args) {
  let array1 = args[0];
  let array2 = args[1];
  let concatenate = array1.concat(array2);

  let arrayOfIntersection = concatenate.filter(function(el, index, arr) {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  })

  return arrayOfIntersection;
}

export {
  diffArray,
};
