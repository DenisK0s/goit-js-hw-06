import users from "./users.js"

/* 1. Получить массив имен всех пользователей (поле name).*/

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ************************************************************************************************************************

/* 2. Получить массив объектов пользователей по цвету глаз*/

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ************************************************************************************************************************

/* 3. Получить массив имен пользователей по полу (поле gender).*/

const getUsersWithGender = (users, gender) => users.reduce((acc, user) => {
    if (user.gender === gender) { 
      acc.push(user.name);
  }
  return acc;
  }  
, []);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ************************************************************************************************************************

/* 4. Получить массив только неактивных пользователей (поле isActive)*/

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ************************************************************************************************************************

/* 5. Получить пользоваля (не массив) по email (поле email, он уникальный).*/

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ************************************************************************************************************************

/* 6. Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).*/

const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <=  max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ************************************************************************************************************************

/* 7. Получить общую сумму баланса (поле balance) всех пользователей. */

const calculateTotalBalance = users => users.reduce((acc, user) => {
  return acc + user.balance;
}, 0);

console.log(calculateTotalBalance(users)); // 20916

// ************************************************************************************************************************

/* 8. Массив имен всех пользователей у которых есть друг с указанным именем. */

const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
