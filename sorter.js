const selector = require("./selector");

function sorter(a) {
  const { length } = a;
  let min;
  for (let i = 0; i < length - 1; i++) {
    min = i;
    for (let j = i; j < length; j++) {
      if (selector.defaultCmp(a[min], a[j]) === selector.BIGGER_THAN) {
        min = j;
      }
    }
    if (i !== min) {
      selector.swap(a, i, min);
    }
  }
  return a;
}

module.exports = sorter;
