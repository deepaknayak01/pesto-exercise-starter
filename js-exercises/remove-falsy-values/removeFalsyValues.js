'use strict';
function removeFalsyValues(unformattedArray) {
  let formattedArray = [];

  formattedArray = unformattedArray.filter(function(el) {
    if(el) {
      return el;
    }
  });
  return formattedArray;
}

export {
  removeFalsyValues,
};
