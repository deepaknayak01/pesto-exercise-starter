function longestWordInString(...args) {
  let longestWordCount = 0;
  let sentence = args[0];
  let arrayOfWords = sentence.split(' ');

  for(let i = 0; i < arrayOfWords.length; i++) {
    if(arrayOfWords[i].length > longestWordCount) {
      longestWordCount = arrayOfWords[i].length;
    }
  }
  return longestWordCount;
}

export { longestWordInString };
