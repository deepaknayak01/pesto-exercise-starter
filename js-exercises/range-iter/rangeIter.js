
function isThrowable(lb, ub) {
  if(typeof lb === 'undefined' || typeof ub === 'undefined') {
    return 'undefined is not a number';
  }
  if(typeof lb !== 'number') {
    return lb + ' is not a number';
  }
  if(typeof ub !== 'number') {
    return ub + ' is not a number';
  }
}

function rangeIter(lb, ub) {
  let throwMsg = isThrowable(lb, ub);
  if(throwMsg) {
    throw new TypeError(throwMsg);
  }

  const rangeIterable = {
    *[Symbol.iterator]() {
      for(let start = lb; start <= ub; start++) {
        yield start;
      }
    }
  }

  return rangeIterable;
}

export { rangeIter };
