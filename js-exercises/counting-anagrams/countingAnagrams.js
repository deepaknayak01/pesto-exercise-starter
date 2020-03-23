const countingAnagrams = strAnagram => {
  let countOfAnagrams = 0;

  if(typeof strAnagram !== 'string') {
    throw 'Input is not a String';
  }

  let arrayOfAnagrams = strAnagram.split(' ');
  let sortedAnagrams = [];
  let obj = {};

  arrayOfAnagrams.filter(function(word, index) {
    if(word.length > 2 && arrayOfAnagrams.indexOf(word) === index) {
      word = word.split('').sort().join('');
      sortedAnagrams.push(word);
    }
  })
  
  sortedAnagrams.forEach(el => {
    obj[el] = (obj[el] || 0) + 1;
  })

  Object.keys(obj).forEach(function(item){
    if(obj[item] > 1) countOfAnagrams = obj[item];
  }); 

  if(countOfAnagrams) {
    --countOfAnagrams;
  }

  return countOfAnagrams;
};

export { countingAnagrams };
