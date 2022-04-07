import {curry} from './curry'
import {reduce} from './map_filter_reduce';
import {map, pipe} from './fx';

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

const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

console.log(join('-', [1,2,3])) // 1-2-3
console.log(join('-', function *() {
  yield 1;
  yield 2;
  yield 3;
}())); // 1-2-3

const queryStr = pipe(
  L.entries,
  L.map(([key, value]) => `${key}=${value}`),
  join('-'),
);

// // 이것도 인자를 전달하고 있으니 잘 동작
// // const queryStr = pipe(
// //   Object.entries,
// //   map(([key, value]) => `${key}=${value}`),
// //   join('-'),
// // );
//
// const queryStr = pipe(
//   L.entries,
//   map(([key, value]) => `${key}=${value}`),
//   join('-'),
// );

console.log(queryStr({name: '기문', type: 'student', nickname: '끼문'}))

