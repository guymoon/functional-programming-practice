const go = (...args) => reduce((acc, f) => f(acc), args);

const goResult = go(0,
  a => a + 1,
  a => a + 10,
  a => a + 20
);

console.log(goResult); // 31

const pipe = (f, ...args) => {
  return (...numbers) => go(f(...numbers), ...args);
};

const f = pipe(
  (a,b) => a + b,
  a => a + 10,
  a => a + 20
);

console.log(f(0, 1)); //

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

// go로 가독성 증가시키기
const totalPriceUnder25000Ver1 = go(
  products,
  products => filter(product => product.price <= 25000, products),
  productsUnder25000 => map(product => product.price, productsUnder25000),
  pricesUnder25000 => reduce((acc, cur) => acc + cur, pricesUnder25000)
);

const totalPriceUnder25000Ver2 = go(
  products,
  products => filter(product => product.price <= 25000, products),
  productsUnder25000 => map(product => product.price, productsUnder25000),
  pricesUnder25000 => reduce((acc, cur) => acc + cur, pricesUnder25000)
);

const totalPriceUnder25000Ver3 = go(
  products,
  filter(product => product.price <= 25000),
  map(product => product.price),
  reduce((acc, cur) => acc + cur)
);

console.log(totalPriceUnder25000Ver1); // 75000
console.log(totalPriceUnder25000Ver2); // 75000
console.log(totalPriceUnder25000Ver3); // 75000


