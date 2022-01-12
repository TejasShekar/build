//Easy
// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

let sum = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num5;

console.log(sum(5, 13, 7, 21, 48));

// Write a program to take a number input from user and determine whether the number is odd or even.
const readlineSync = require("readline-sync");
const number = readlineSync.question("Enter a number -> ");

number % 2 === 0 ? console.log("It is Odd") : console.log("It is Even");

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const minMax = (num1, num2) =>
  num1 > num2
    ? `Min = ${num2} and Max = ${num1}`
    : `Min = ${num1} and Max = ${num2}`;

console.log(minMax(129, 251));

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const maxNum = (num1, num2, num3) => {
  return num1 > num2 && num1 > num3
    ? `${num1} is the maximum`
    : num2 > num3
    ? `${num2} is maximum`
    : `${num3} is maximum`;
};

console.log(maxNum(8, 23, 17));

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.


