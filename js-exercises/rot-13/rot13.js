function rot13(...args) {
  let inputCode = args[0];
  let letters = inputCode.split('');
  let arrayOfRot13Decode = [];
  let rot13Code = 13;
  let modifiedRot13Character;
  let regexpOfChars = /[a-z]/i;

  for(let i = 0; i < letters.length; i++) {
    if(regexpOfChars.test(letters[i])) {
      modifiedRot13Character = letters[i].charCodeAt() + rot13Code;
      modifiedRot13Character = String.fromCharCode(modifiedRot13Character > 90 ? modifiedRot13Character - 26 : modifiedRot13Character);
      arrayOfRot13Decode.push(modifiedRot13Character);
    } else {
      arrayOfRot13Decode.push(letters[i]);
    }
  }

  return arrayOfRot13Decode.join('');
}

export {
  rot13,
};
