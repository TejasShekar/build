// Given a and b, your function should return the value of a<sup>b</sup>
// **Example:**
// **Input:** `power(2,3)` ––> **Output:** `8`

const power = (a, b) => console.log(a ** b);
power(2, 3);

// Given length of a regular hexagon, your function should return area of the hexagon.
// **Example:**
// **Input:** `areaOfHexagon(10)` ––> **Output:** `259.80`

const areaOfHexagon = (lenght) => {
  let area = (3 * Math.sqrt(3) * (lenght * lenght)) / 2;
  console.log((area = Number(area.toFixed(2))));
};
areaOfHexagon(10);

// Given a sentence, your functions should return the number of words in the sentence.
// **Example:**
// **Input:** `noOfWords(We are neoGrammers)` ––> **Output:** `3`

const wordCount = (param) => {
  count = param.split(" ").filter((word) => word != "").length;
  console.log(`Word count is ${count}`);
};

wordCount("We are neoGrammers");

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// **Example:**
// **Input:** `findMin(3,5)` ––> **Output:** `3`
// **Input:** `findMin(3,5,9,1)` ––> **Output:** `1`

const findMin = (...args) => console.log(Math.min(...args));
findMin(3, 5);
findMin(3, 5, 9, 2);

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// **Example:**
// **Input:** `findMax(3,5)` ––> **Output:** `5`
// **Input:** `findMax(3,5,9,1)` ––> **Output:** `9`

const findMax = (...args) => console.log(Math.max(...args));
findMax(3, 5);
findMax(3, 5, 9, 1);

// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.
// **Example:**
// **Input:** `typeOfTriangle(30, 60, 90)` ––> **Output:** `Scalene Triangle`

const typeOfTriangle = (angle1, angle2, angle3) => {
  let sum = angle1 + angle2 + angle3;
  sum != 180
    ? console.log(`Not a Triangle`)
    : angle1 === angle2 && angle2 === angle3
    ? console.log(`Equilateral Triangle`)
    : angle1 === angle2 || angle2 === angle3 || angle3 === angle1
    ? console.log("Isosceles Triangle")
    : console.log(`Scalene Triangle`);
};
typeOfTriangle(50, 60, 70);
