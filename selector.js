const selector = {
  larger: (a, b) => {
    if (a == b) {
      return "Egyenlo";
    } else if (a > b) {
      return a;
    } else {
      return b;
    }
  },
  smaller: (a, b) => {
    if (a == b) {
      return "Egyenlo";
    } else if (a < b) {
      return a;
    } else {
      return b;
    }
  },
  swap: (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr[a];
  },
  BIGGER_THAN: 1,
  LESS_THAN: -1,
  defaultCmp: (a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? selector.LESS_THAN : selector.BIGGER_THAN;
  },
};

module.exports = selector;
