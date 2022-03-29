// f는 (item) => item.name 이런 형태
const map = (f, iter) => {
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

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

console.log(map(product => product.name, products));
console.log(filter(product => product.name === '긴팔티', products));

