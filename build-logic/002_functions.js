/*
Given a and b, your function should return the value of a<sup>b</sup>
**Example:**
**Input:** `power(2,3)` ––> **Output:** `8`
*/

const power = (a, b) => console.log(a ** b);
power(2, 3);

/*
Given length of a regular hexagon, your function should return area of the hexagon.
**Example:**
**Input:** `areaOfHexagon(10)` ––> **Output:** `259.80`
*/

const areaOfHexagon = (l) => {
  let area = (3 * Math.sqrt(3) * (l * l)) / 2;
  console.log((area = Number(area.toFixed(2))));
};
areaOfHexagon(10);

/*
Given a sentence, your functions should return the number of words in the sentence.
**Example:**
**Input:** `noOfWords(We are neoGrammers)` ––> **Output:** `3`
*/

const wordCount = (sentence) => {
  count = sentence.split(" ").filter((word) => word != "").length;
  console.log(`Word count is ${count}`);
};
wordCount("We are neoGrammers");

/*
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
**Example:**
**Input:** `findMin(3,5)` ––> **Output:** `3`
**Input:** `findMin(3,5,9,1)` ––> **Output:** `1`
*/

const findMin = (...param1) => console.log(Math.min(...param1));
findMin(3, 5);
findMin(3, 5, 9, 2);

/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
**Example:**
**Input:** `findMax(3,5)` ––> **Output:** `5`
**Input:** `findMax(3,5,9,1)` ––> **Output:** `9`
*/

const findMax = (...param2) => console.log(Math.max(...param2));
findMax(3, 5);
findMax(3, 5, 9, 1);

/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.
**Example:**
**Input:** `typeOfTriangle(30, 60, 90)` ––> **Output:** `Scalene Triangle`
*/

const typeOfTriangle = (angle1, angle2, angle3) => {
  const sum = angle1 + angle2 + angle3;
  sum != 180
    ? console.log(`Not a Triangle`)
    : angle1 === angle2 && angle2 === angle3
    ? console.log(`Equilateral Triangle`)
    : angle1 === angle2 || angle2 === angle3 || angle3 === angle1
    ? console.log("Isosceles Triangle")
    : console.log(`Scalene Triangle`);
};
typeOfTriangle(50, 60, 70);

/*
Given an array, your function should return the length of the array.
**Example:**
**Input:** `arrayLength([1,5,3,7,8])` ––> **Output:** `5`
*/

const arrayLength = (arr) => console.log(arr.length);
arrayLength([1, 5, 3, 7, 8]);

/*
Given an array and an item, your function should return the index at which the item is present.  
**Example:**  
**Input:** `indexOf([1,6,3,5,8,9], 3)` ––> **Output:** `2`
*/

const indexOf = (array, item) => console.log(array.indexOf(item));
indexOf([1, 6, 3, 5, 8, 9], 3);

/*
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.  
**Example:**  
**Input:** `replace([1,5,3,5,6,8], 5, 10)` ––> **Output:** `[1,10,3,10,6,8]`
*/

const replace = (array1, findNum, replaceNum) =>
  console.log(array1.map((num) => (num === findNum ? replaceNum : num)));

replace([1, 5, 3, 5, 6, 8], 5, 10);

/*
Given two arrays, your function should return single merged array.  
**Example:**  
**Input:** `mergeArray([1,3,5], [2,4,6])` ––> **Output:** `[1,3,5,2,4,6]`
*/

const mergeArray = (arr1, arr2) => console.log([...arr1, ...arr2]);
mergeArray([1, 3, 5], [2, 4, 6]);

/*
Given a string and an index, your function should return the character present at that index in the string.  
**Example:**  
**Input:** `charAt("neoGcamp", 4)` ––> **Output:** `c`
*/

const charAt = (string, i) => console.log(string[i]);
charAt("neoGcamp", 4);

/*
Given two dates, your function should return which one comes before the other.  
**Example:**  
**Input:** `minDate('02/05/2021', '24/01/2021')` ––> **Output:** `24/01/2021`
*/
const minDate = (date_1, date_2) => {
  let date1 = date_1.split("/");
  let date2 = date_2.split("/");
  let d1 = Number(date1[0]),
    m1 = Number(date1[1]),
    y1 = Number(date1[2]),
    d2 = Number(date2[0]),
    m2 = Number(date2[1]),
    y2 = Number(date2[2]);
  if (y1 === y2) {
    if (m1 === m2) {
      if (d1 === d2) {
        console.log(`Both dates are same`);
      } else if (d1 < d2) {
        console.log(`${date_1} is the older date`);
      } else {
        console.log(`${date_2} is the older date`);
      }
    } else if (m1 < m2) {
      console.log(`${date_1} is the older date`);
    } else {
      console.log(`${date_2} is the older date`);
    }
  } else if (y1 < y2) {
    console.log(`${date_1} is the older date`);
  } else {
    console.log(`${date_2} is the older date`);
  }
};
minDate("02/05/2021", "24/10/2021");

/*
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.
**Example:**  
**Input:** `encodeString("neogcamp", 2)` ––> **Output:** `pgqiecor`
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/

const encodeString = (str, n) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let encodedString = [];
  str = str.toLowerCase().split("");
  for (let letters of str) {
    let i = 0;
    for (let letter of alphabets) {
      if (letter === letters) {
        break;
      } else {
        i = i + 1;
      }
    }
    encodedString.push(alphabets[i + n]);
  }
  encodedString = encodedString.join("");
  console.log(encodedString);
};

encodeString("neogcamp", 2);

/*
Given a sentence, return a sentence with first letter of all words as capital.  
   **Example:**  
   **Input:** `toSentenceCase('we are neoGrammers')` ––> **Output:** `We Are NeoGrammers`
*/

const toSentenceCase = (sentence) => {
  sentence = sentence.split(" ").filter((word) => word != "");
  let arr = "";
  for (let word of sentence) {
    arr += word[0].toUpperCase() + word.slice(1) + " ";
  }
  console.log(arr);
};
toSentenceCase("we are neoGrammers");

/*
Given an array of numbers, your function should return an array in the ascending order.  
   **Example:**  
   **Input:** `sortArray([100,83,32,9,45,61])` ––> **Output:** `[9,32,45,61,83,100]`
*/
