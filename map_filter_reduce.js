import {curry} from './curry';

const map = curry((f, iter) => {
  const res = [];

  for (const i of iter) {
    res.push(f(i));
  }

  return res;
});


const filter = curry((f, iter) => {
  const res = [];

  for (const i of iter) {
    if (f(i)) res.push(i);
  }

  return res;
});

const reduce = curry((f, acc = 0, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const i of iter) {
    acc = f(acc, i);
  }
  return acc;
});

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

console.log(map(product => product.name, products));
console.log(filter(product => product.name === '긴팔티', products));

const add = (acc, cur) => acc + cur;
console.log(reduce(add, 0, map(product => product.price, products)));
console.log(reduce(add, map(product => product.price, products))); // 10

const totalPriceUnder25000 = reduce(
  add,
  filter(price => price <= 25000,
    map(product => product.price, products))
);

console.log(totalPriceUnder25000);
