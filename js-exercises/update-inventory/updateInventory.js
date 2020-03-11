function updateInventory(...args) {
  let currentInventory = args[0];
  let freshDelivery = args[1];

  for(let i = 0; i < freshDelivery.length; i++) {
    updateCurrentInventory(freshDelivery[i]);
  }
  currentInventory.sort(function(prev, next) {
    return prev[1].localeCompare(next[1]);
  })
  return currentInventory;

  function updateCurrentInventory(itemToBeUpdated) {
    let item = itemToBeUpdated[1];
    let isItemExists = false;
    for(let j = 0; j < currentInventory.length; j++) {
      if(currentInventory[j].indexOf(item) > -1) {
        currentInventory[j][0] = itemToBeUpdated[0] + currentInventory[j][0];
        console.log(currentInventory[j]);
        isItemExists = true;
      }
    }
    if(!isItemExists) {
      currentInventory.push(itemToBeUpdated);
    }
  }
}

export {
  updateInventory,
};
