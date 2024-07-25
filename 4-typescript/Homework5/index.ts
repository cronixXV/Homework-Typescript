// 1) Напишите функцию reverseArray, которая принимает массив любого типа и возвращает новый массив, элементы которого расположены в обратном порядке. Используйте дженерик T в параметрах функции.
// Пример использования:

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers); // [5, 4, 3, 2, 1]

// const strings = ["a", "b", "c"];
// const reversedStrings = reverseArray(strings); // ["c", "b", "a"]
// 2) Напишите функцию getProperty, которая принимает объект и строку, представляющую ключ этого объекта, и возвращает значение, соответствующее этому ключу. Используйте оператор keyof для ограничения ключа.
// Пример использования:

// const person = { name: "Alice", age: 25 };
// const name = getProperty(person, "name"); // "Alice"
// const age = getProperty(person, "age"); // 25
// 3) *Напишите класс Collection, который принимает тип элементов и предоставляет методы add(item: T), remove(item: T), и getItems(). Ограничьте тип элементов, чтобы они поддерживали метод toString().
// Пример использования Collection:

// const collection = new Collection<number>();
// collection.add(1);
// collection.add(2);
// collection.remove(1);
// console.log(collection.getItems()); // [2]

// const stringCollection = new Collection<string>();
// stringCollection.add("a");
// stringCollection.add("b");
// stringCollection.remove("a");
// console.log(stringCollection.getItems()); // ["b"]

// Подсказка для задания №3.
// <T extends { toString(): string }>

//Решение

//1)
function reverseArray<T>(array: T[]): T[] {
  return array.slice().reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers); // [5, 4, 3, 2, 1]
console.log(reversedNumbers);

const strings = ["a", "b", "c"];
const reversedStrings = reverseArray(strings); // ["c", "b", "a"]
console.log(reversedStrings);

//2)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 25 };
const personName = getProperty(person, "name");
console.log(personName); // "Alice"
const age = getProperty(person, "age");
console.log(age); // 25

//3)
class Collection<T extends { toString(): string }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    const indexToRemove = this.items.findIndex(
      (i) => i.toString() === item.toString()
    );
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }

  getItems(): T[] {
    return this.items;
  }
}

const collection = new Collection<number>();
collection.add(1);
collection.add(2);
collection.remove(1);
console.log(collection.getItems()); // [2]

const stringCollection = new Collection<string>();
stringCollection.add("a");
stringCollection.add("b");
stringCollection.remove("a");
console.log(stringCollection.getItems()); // ["b"]
