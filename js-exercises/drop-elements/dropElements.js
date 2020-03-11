function dropElements(elements, predicate) {
  let validElements = [];
  
  for(let i = 0; i < elements.length; i++) {
    if(predicate(elements[i])) {
      validElements.push(elements[i]);
    }
  }
  return validElements;
}

export { dropElements };
