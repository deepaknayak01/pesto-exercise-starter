var animalSort = animals => {
  let sortedAnimals = {};
  let sortIndex;

  sortedAnimals = animals.sort(function(nextAnimal, prevAnimal) {
    sortIndex = compare(prevAnimal, nextAnimal, 'numberOfLegs');
    if(sortIndex) {
      return sortIndex;
    } else {
      return compare(prevAnimal, nextAnimal, 'name');
    }
  })

  return sortedAnimals;
  
  function compare(prev, next, compareByKey) {
    if (next[compareByKey] > prev[compareByKey]) {
      return 1;
    } else if (next[compareByKey] < prev[compareByKey]) {
      return -1;
    }
    return 0;
  }
};

export { animalSort };
