// f는 (item) => item.name 이런 형태
const map_filter_reduce = (f, iter) => {
  const res = [];

  for (const i of iter) {
    res.push(f(i));
  }

  return res;
};

const filter = (f, iter) => {
  const res = [];

  for (const i of iter) {
    if (f(i)) res.push(i);
  }

  return res;
};

const reduce = (f, acc = 0, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const i of iter) {
    acc = f(acc, i);
  }
  return acc;
};

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

console.log(map_filter_reduce(product => product.name, products));
console.log(filter(product => product.name === '긴팔티', products));

const add = (acc, cur) => acc + cur;
console.log(reduce(add, 0, map_filter_reduce(product => product.price, products)));
console.log(reduce(add, map_filter_reduce(product => product.price, products))); // 10

const totalPriceUnder25000 = reduce(
  add,
  filter(price => price <= 25000,
    map(product => product.price, products))
);

console.log(totalPriceUnder25000);
