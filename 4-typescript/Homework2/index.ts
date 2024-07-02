// 1) Создайте интерфейс Product с полями:
// id: число;
// name: строка;
// price: число;
// category: строка.

// 2) Напишите функцию displayProduct, которая принимает объект типа Product и выводит его свойства в консоль. Используйте деструктуризацию параметров.
// 3) Напишите функции для поиска продуктов по ID и по имени. Используйте перегрузку функций для реализации:
// findProduct(id: number): Product | undefined;
// findProduct(name: string): Product | undefined.
// 4) *Напишите функцию assertNever, которая принимает параметр типа never и выбрасывает ошибку с сообщением "Unexpected value: [значение]". Эта функция полезна для проверки исчерпывающей обработки случаев в выражениях switch.
// Пример использования assertNever:

// function getArea(shape: Shape): number {
// switch (shape.kind) {
// case "circle":
//   return Math.PI * shape.radius ** 2;
// case "square":
//   return shape.side ** 2;
// default:
//   return assertNever(shape); // здесь проверка на исчерпывающую обработку
// }
// }

//Решение:

// 1
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// 2
function displayProduct({ id, name, price, category }: Product) {
  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Price: ${price}`);
  console.log(`Category: ${category}`);
}

// 3
const products: Product[] = [
  { id: 1, name: "Apple", price: 100, category: "Fruits" },
  { id: 2, name: "Tomato", price: 200, category: "Vegetables" },
  { id: 3, name: "Strawberry", price: 300, category: "Berries" },
];

// 3
function findProduct(id: number): Product | undefined;
function findProduct(name: string): Product | undefined;

function findProduct(search: number | string): Product | undefined {
  if (typeof search === "number") {
    return products.find((product) => product.id === search);
  } else {
    return products.find((product) => product.name === search);
  }
}

const productById = findProduct(1);
console.log(productById);

const productByName = findProduct("Tomato");
console.log(productByName);

// 4
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

const product = findProduct(3);

if (product !== undefined) {
  displayProduct(product);
} else {
  //   assertNever(product); // Эта строка не будет выполнена, так как у product type Product | undefined;
}
