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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age) {
        return _super.call(this, name, age) || this;
    }
    Developer.prototype.getRole = function () {
        return "Developer";
    };
    Developer.prototype.work = function (hours) {
        console.log("Working ".concat(hours, " hours"));
    };
    Developer.prototype.takeBreak = function (minutes) {
        console.log("Taking a break for ".concat(minutes, " minutes"));
    };
    return Developer;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        return _super.call(this, name, age) || this;
    }
    Manager.prototype.getRole = function () {
        return "SEO";
    };
    Manager.prototype.work = function (hours) {
        console.log("Managing for ".concat(hours, " hours"));
    };
    Manager.prototype.takeBreak = function (minutes) {
        console.log("Taking a break for ".concat(minutes, " minutes"));
    };
    return Manager;
}(Person));
var developer = new Developer("Oleg", 30);
var manager = new Manager("Denis", 45);
developer.work(8);
developer.takeBreak(30);
console.log("Developer Role: ".concat(developer.getRole()));
console.log("Developer Age: ".concat(developer.getAge()));
manager.work(6);
manager.takeBreak(20);
console.log("Manager Role: ".concat(manager.getRole()));
console.log("Manager Age: ".concat(manager.getAge()));
