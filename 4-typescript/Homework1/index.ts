// Задание 1
//Создайте псевдонимы типов для следующих сущностей:
// UserId (число)
// UserName (строка)
// Email (строка)

// Задание 2
// Создайте интерфейс User, который будет использовать созданные псевдонимы типов и включать следующие поля:
// id: UserId
// name: UserName
// email: Email
// isActive: boolean

// Задание 3
//Напишите функцию createUser, которая принимает параметры типа UserId, UserName, Email и возвращает объект типа User.

// Задание 4
// Создайте перечисление UserRole, которое будет включать следующие роли:
// Admin
// User
// Guest

// Задание 5
// Обновите интерфейс User, добавив к нему поле role типа UserRole.

// Задание 6*
// *Напишите функцию filterUsersByRole, которая принимает массив объектов типа User и значение типа UserRole, и возвращает массив пользователей с соответствующей ролью.

//1
type UserId = number;
type UserName = string;
type Email = string;

//2
interface User {
  id: UserId;
  name: UserName;
  email: Email;
  isActive: boolean;
  role: UserRole;
}

// 3
function createUser(
  id: UserId,
  name: UserName,
  email: Email,
  role: UserRole
): User {
  return {
    id,
    name,
    email,
    isActive: false,
    role,
  };
}

// 4
enum UserRole {
  Admin,
  User,
  Guest,
}

const admin = createUser(1, "Vadim", "vadim@example.ru", UserRole.Admin);
const user = createUser(1, "Oleg", "oleg.ts@mail.ru", UserRole.User);
const guest = createUser(
  3,
  "Anonymous",
  "anonymous@example.com",
  UserRole.Guest
);
console.log(user);

// 6
function filterUsersByRole(users: User[], role: UserRole): User[] {
  return users.filter((user) => user.role === role);
}
const users: User[] = [
  {
    id: 1,
    name: "Vadim",
    email: "vadim@example.ru",
    isActive: true,
    role: UserRole.Admin,
  },
  {
    id: 2,
    name: "Oleg",
    email: "oleg.ts@mail.ru",
    isActive: true,
    role: UserRole.User,
  },
  {
    id: 3,
    name: "Anonymous",
    email: "anonymous@example.com",
    isActive: false,
    role: UserRole.Guest,
  },
];

const admins = filterUsersByRole(users, UserRole.Admin);
const guests = filterUsersByRole(users, UserRole.Guest);
