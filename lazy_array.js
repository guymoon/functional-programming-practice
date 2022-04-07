import {curry} from './curry'

const L = {};

// range
L.range = function* (limit) {
  let i = 0;
  while (i < limit) {
    yield i++;
  }
}

const iter = L.range(4);
console.log(...iter) // 0, 1, 2, 3
console.log(iter); // Generator
console.log(reduce(add, iter)); // 6

// map
L.map = function* (f, iter) {
  for (const i of iter) yield f(i);
};

const lazyMapResult = L.map(num => num + 1, [0, 0, 0]);
console.log(...lazyMapResult);

// filter
L.filter = function* (f, iter) {
  for (const i of iter) {
    if(f(i)) yield i;
  };
};

const lazyFilterResult = L.filter(num => num > 5, [0, 10, 15]);
console.log(...lazyFilterResult);

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]];
};
