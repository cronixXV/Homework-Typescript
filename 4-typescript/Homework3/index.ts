// 1. Создайте абстрактного класса Person и классов Developer и Manager:
// 2. Создайте абстрактный класс Person с полями:
//         name (string, публичный)
//         age (number, приватный)
// 3. Добавьте конструктор для инициализации полей name и age.
// 4. Создайте методы:
//         getAge(): возвращает значение поля age.
//         setAge(age: number): изменяет значение поля age.
// 5. Создайте абстрактный метод getRole(): string.
// 6. Создайте интерфейс Workable с методами:
//     work(hours: number): void
//     takeBreak(minutes: number): void
// 7. Создайте классы Developer и Manager, которые наследуются от класса Person и реализуют интерфейс Workable:
//     Реализуйте метод getRole():
//     Для Developer возвращает "Developer"
//     Для Manager возвращает "Manager"
// 8. Реализуйте методы интерфейса Workable:
//     work(hours: number): выводит в консоль сообщение вида "Working {hours} hours" для Developer и "Managing for {hours} hours" для Manager.
//     takeBreak(minutes: number): выводит в консоль сообщение вида "Taking a break for {minutes} minutes".

// Пример использования:

// const developer = new Developer("Alice", 30);
// const manager = new Manager("Bob", 45);

// developer.work(8);
// developer.takeBreak(30);
// console.log(`Developer Role: ${developer.getRole()}`);
// console.log(`Developer Age: ${developer.getAge()}`);

// manager.work(6);
// manager.takeBreak(20);
// console.log(`Manager Role: ${manager.getRole()}`);
// console.log(`Manager Age: ${manager.getAge()}`);

//Решение

abstract class Person {
  constructor(public name: string, private age: number) {}

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }
}

interface Workable {
  work(hours: number): void;
  takeBreak(minutes: number): void;
}

class Developer extends Person implements Workable {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public getRole(): string {
    return "Developer";
  }

  public work(hours: number): void {
    console.log(`Working ${hours} hours`);
  }

  public takeBreak(minutes: number): void {
    console.log(`Taking a break for ${minutes} minutes`);
  }
}

class Manager extends Person implements Workable {
  constructor(name: string, age: number) {
    super(name, age);
  }
  public getRole(): string {
    return "SEO";
  }

  public work(hours: number): void {
    console.log(`Managing for ${hours} hours`);
  }

  public takeBreak(minutes: number): void {
    console.log(`Taking a break for ${minutes} minutes`);
  }
}

const developer = new Developer("Oleg", 30);
const manager = new Manager("Denis", 45);

developer.work(8);
developer.takeBreak(30);
console.log(`Developer Role: ${developer.getRole()}`);
console.log(`Developer Age: ${developer.getAge()}`);

manager.work(6);
manager.takeBreak(20);
console.log(`Manager Role: ${manager.getRole()}`);
console.log(`Manager Age: ${manager.getAge()}`);
