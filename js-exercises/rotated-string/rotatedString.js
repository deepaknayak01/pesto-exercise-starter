const rotatedString = (str1, str2) => {
  let splitStr2 = str2.split('');
  let reversedStr2 = splitStr2.reverse().join('');
  
  return str1.localeCompare(reversedStr2) === 0 ? true : false;
};

export { rotatedString };
