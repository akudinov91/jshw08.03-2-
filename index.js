//Задача 1.

// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// const myObject = {
//   name: "Andrew",
//   age: 33,
//   city: "Baku",
//   hobby: "Music",
// };

// const numberOfProperties = countProperties(myObject);
// console.log(`Количество свойств в объекте: ${numberOfProperties}`);

//Задача 2.

// function hasKey(obj, key) {
//   return key in obj;
// }

// const myObject = {
//   name: "Andrew",
//   age: 33,
//   city: "Baku",
// };

// const keyToCheck = "age";
// const result = hasKey(myObject, keyToCheck);

// console.log(result);

//Задача 3.

// function getObjectValues(obj) {
//   let keys = Object.keys(obj);

//   let values = [];

//   for (let i = 0; i < keys.length; i++) {
//     values.push(obj[keys[i]]);
//   }

//   return values;
// }

// let myObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };
// let resultArray = getObjectValues(myObject);
// console.log(resultArray);

//Задача 4.

// function mergeObjects(obj1, obj2) {
//   const mergedObject = {};

//   for (let property in obj1) {
//     mergedObject[property] = obj1[property];
//   }

//   for (let property in obj2) {
//     mergedObject[property] = obj2[property];
//   }

//   return mergedObject;
// }
// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };

// const merged = mergeObjects(object1, object2);
// console.log(merged);

//Задача 5.

// function filterNumericProperties(obj) {
//   const result = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
//       result[key] = obj[key];
//     }
//   }

//   return result;
// }

// const inputObject = {
//   name: "Andrew",
//   age: 33,
//   height: 179,
//   weight: "62",
// };
// const filteredObject = filterNumericProperties(inputObject);
// console.log(filteredObject);

//Задача 6.

// function sortObjectProperties(obj) {
//   const sortedKeys = Object.keys(obj).sort();
//   const sortedObject = {};

//   for (const key of sortedKeys) {
//     sortedObject[key] = obj[key];
//   }

//   return sortedObject;
// }

// const inputObject = {
//   banana: 3,
//   apple: 1,
//   orange: 2,
// };

// const sortedObject = sortObjectProperties(inputObject);
// console.log(sortedObject);

//Задача 7.

// function sumNumericProperties(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       sum += obj[key];
//     }
//   }

//   return sum;
// }

// let sampleObject = {
//   prop1: 10,
//   prop2: "abc",
//   prop3: 5,
//   prop4: "def",
// };

// let result = sumNumericProperties(sampleObject);
// console.log(result);

//Задача 8.

// function hasNumericProperty(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       return true;
//     }
//   }
//   return false;
// }

// const exampleObj1 = { name: "Andrew", age: 33, city: "Baku" };
// const exampleObj2 = { name: "Gurban", email: "gurban@example.com" };

// console.log(hasNumericProperty(exampleObj1));
// console.log(hasNumericProperty(exampleObj2));

//Задача 9.

// function removeProperties(obj, keysToRemove) {
//   keysToRemove.forEach(function (key) {
//     if (obj.hasOwnProperty(key)) {
//       delete obj[key];
//     }
//   });
// }

// let myObject = {
//   name: "Andrew",
//   age: 33,
//   city: "Baku",
// };

// let keysToRemove = ["age", "city"];
// removeProperties(myObject, keysToRemove);

// console.log(myObject);

//задача 10.

// function objectToArray(obj) {
//   return Object.entries(obj);
// }

// const myObject = { name: "Andrew", age: 33, city: "Baku" };
// const resultArray = objectToArray(myObject);

// console.log(resultArray);

//Задача 11.

// const person = {
//   name: "Andrew",
//   sayHello: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person.sayHello();

//Задача 12.

// function calculateArea(width, height) {
//   return width * height;
// }

// let rectangle = {
//   width: 5,
//   height: 10,
//   getArea: function () {
//     return calculateArea(this.width, this.height);
//   },
// };

// console.log("Площадь прямоугольника:", rectangle.getArea());

//Задача 13.

// const car = {
//   speed: 0,

//   accelerate: function (value) {
//     if (value > 0) {
//       this.speed += value;
//       console.log(
//         `Скорость увеличена на ${value}. Новая скорость: ${this.speed}`
//       );
//     } else {
//       console.log(
//         "Значение должно быть положительным для увеличения скорости."
//       );
//     }
//   },
// };

// car.accelerate(50);
// car.accelerate(-20);

//Задача 14.

// function Book(title, author) {
//   this.title = title;
//   this.author = author;

//   this.printInfo = function () {
//     console.log("Title: " + this.title + ", author: " + this.author);
//   };
// }

// let myBook = new Book("Harry Potter", "Rouling");
// myBook.printInfo();

//Задача 15.

// const calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
//   divide: function (num1, num2) {
//     if (num2 === 0) {
//       return "Нельзя делить на ноль!";
//     }
//     return num1 / num2;
//   },
// };

// console.log("Сложение:", calculator.add(5, 3));
// console.log("Вычитание:", calculator.subtract(8, 2));
// console.log("Умножение:", calculator.multiply(4, 6));
// console.log("Деление:", calculator.divide(10, 2));
// console.log("Попытка деления на ноль:", calculator.divide(7, 0));
