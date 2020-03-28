const onChange = (target, onChangeFn) => {
  
  const changeHandler = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], changeHandler)
      } else {
        return target[key];
      }
    },
    set: function(target, prop, value) {
        target[prop] = value;
        onChangeFn();
        return true;
    },
    defineProperty(target, prop, descriptor) {
      if(descriptor) {
        onChangeFn();
        return true;
      }
      return false;
    },
    deleteProperty(target, prop) {
      if(prop in target) {
        delete target[prop];
        onChangeFn();
        return true;
      }
      return false;
    }
  }
  return new Proxy(target, changeHandler);
};

export { onChange };
