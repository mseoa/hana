type size = {
  id: "XS" | "S" | "M" | "L" | "XL";
  price: number;
};

type sizeOption = {
  XS?: number;
  S?: number;
  M?: number;
  L?: number;
  XL?: number;
};

const SIZE: size[] = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];

const sizeOption1 = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice1 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption1[size.id] * size.price,
  0
);
console.log(totalPrice1);

const sizeOption2: sizeOption = { XS: 2, S: 3, K: 4, L: 5, XL: 4 };
const totalPrice2 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption2[size.id] * size.price,
  0
);

const sizeOption3 = { XS: 2, S: 10, M: 2, L: 2, XL: 4 };

const totalPrice3 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption3[size.id] * size.price,
  0
);
console.log(totalPrice1);

const ONLYSANDXS: size[] = [
  { id: "XS", price: 8000 },
  { id: "XL", price: 15000 },
];

const sizeOption4: sizeOption = { XS: 2, XL: 4 };
const totalPrice4 = ONLYSANDXS.reduce(
  (currPrice, size) => currPrice + sizeOption3[size.id] * size.price,
  0
);

console.log(totalPrice4);
