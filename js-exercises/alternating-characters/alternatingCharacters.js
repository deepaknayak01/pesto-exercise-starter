function alternatingCharacters(arrayOfStrings) {
  let str;
  let countOfDeletionRequired = 0;
  let arrCountOfDeletion = [];

  for(let i = 0; i < arrayOfStrings.length; i++ ) {
    str = arrayOfStrings[i];
    countOfDeletionRequired = 0;

    for(let j = 0; j < str.length; j++ ) {
      if(str[j] === str[j+1]) {
        ++countOfDeletionRequired;
      }
    }
    arrCountOfDeletion.push(countOfDeletionRequired);
  }
  return arrCountOfDeletion;
}

export { alternatingCharacters };
