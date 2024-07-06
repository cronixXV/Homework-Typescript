// 1) Сужение типов (Narrowing). Напишите функцию printInfo, которая принимает аргумент value типа string | number и выводит в консоль:
//         Длину строки, если аргумент типа string.
//         Квадрат числа, если аргумент типа number.
// 2) Сужение типов с помощью оператора in и instanceof:
//     Создайте два интерфейса Dog и Cat:
//         Dog с полями name (string) и bark (метод, возвращающий строку "Woof!").
//         Cat с полями name (string) и meow (метод, возвращающий строку "Meow!").
// 3) Напишите функцию makeSound, которая принимает аргумент animal типа Dog | Cat и использует оператор in для сужения типа:
//         Вызывает метод bark, если animal является Dog.
//         Вызывает метод meow, если animal является Cat.
// 4) *Создайте пользовательские защитники типов:
//     isDog(animal: any): animal is Dog
//     isCat(animal: any): animal is Cat
// 5) *Напишите функцию playWithPet, которая принимает аргумент pet типа Dog | Cat и использует пользовательские защитники типов для:
//     Вызыва bark, если pet является Dog.
//     Вызыва meow, если pet является Cat.
// Пример использования:
// const dog: Dog = {
//   name: 'Rex',
//   bark: () => 'Woof!',
// };
// const cat: Cat = {
//   name: 'Whiskers',
//   meow: () => 'Meow!',
// };
// printInfo('Hello, TypeScript!');
// printInfo(42);
// makeSound(dog);
// makeSound(cat);
// playWithPet(dog);
// playWithPet(cat);
// 1)
function printInfo(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else if (typeof value === "number") {
        console.log(Math.pow(value, 2));
    }
}
// 3)
function makeSound(animal) {
    if ("bark" in animal) {
        console.log(animal.bark());
    }
    else if ("meow" in animal) {
        console.log(animal.meow());
    }
}
// 4)
function isDog(animal) {
    return "bark" in animal;
}
function isCat(animal) {
    return "meow" in animal;
}
// 5)
function playWithPet(pet) {
    if (isDog(pet)) {
        console.log(pet.bark());
    }
    else if (isCat(pet)) {
        console.log(pet.meow());
    }
}
var dog = {
    name: "Rex",
    bark: function () { return "Woof!"; },
};
var cat = {
    name: "Whiskers",
    meow: function () { return "Meow!"; },
};
printInfo("Hello, TypeScript!");
printInfo(42);
makeSound(dog);
makeSound(cat);
playWithPet(dog);
playWithPet(cat);
