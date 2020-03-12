function telephoneCheck(...args) {
  let inputPhone = args[0];
  let regexUSPhone = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;

  return regexUSPhone.test(inputPhone);
}

export { telephoneCheck };
