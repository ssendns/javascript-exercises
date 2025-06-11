const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i];
  }
  return res;
};

const multiply = function(a) {
  let res = 1;
  for (let i = 0; i < a.length; i++) {
    res = res * a[i];
  }
  return res;
};

const power = function(a, b) {
  let res = 1;
  for (let i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  res = 1;
  for (let i = 1; i <= a; i++) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
