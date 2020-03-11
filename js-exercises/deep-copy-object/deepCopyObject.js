const deepCopyObject = objToCopy => {
  let cloneObj = {};
  let key, value;

  if(typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  }

  for(key in objToCopy) {
    value = objToCopy[key];
    cloneObj[key] = (typeof value === "object" && value !== null) ? deepCopyObject(value) : value;
  }
  return cloneObj;
};

export { deepCopyObject };
