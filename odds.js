function *infinity(i = 0) {
  while (true) yield i++;
}

function *limit(limitNumber, iter) {
  for (const i of iter) {
    yield i;
    if(i === limitNumber) return;
  }
}

function *odd(limitNumber) {
  for (const i of limit(limitNumber, infinity(1))) {
    if (i % 2) yield i;
  }
}

console.log([...odd(10)]); // [1, 3, 5, 7, 9]
