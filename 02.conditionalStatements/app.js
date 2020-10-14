function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

makeBetweenFunc(10, 20);
