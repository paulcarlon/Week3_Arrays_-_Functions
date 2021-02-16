//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/*Programmatically subtract the value of the first element in the array from the value in the last element
of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0]
is not allowed). Print the result to the console.*/

const firstEl = ages[0];
const lastEl = ages[ages.length - 1];
const firstElMinusLastEl = lastEl - firstEl;
console.log(
  `Subtracting the first age, ${firstEl}, from the last one, ${lastEl}, results in the number ${firstElMinusLastEl}.`
);

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(31);
newLastEl = ages[ages.length - 1];
const firstElMinusNewLastEl = newLastEl - firstEl;
console.log(
  `After adding my age to the end of our array and subtracting our first age, ${firstEl}, from this new last age, ${newLastEl}, the resulting number is ${firstElMinusNewLastEl}.`
);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
// console.log('The ages are (in ascending numerical order):');
// ages.sort((a, b) => (a > b ? 1 : -1)).forEach((age) => console.log(age));

let agesTotal = 0;
for (let i = 0; i < ages.length; i++) {
  agesTotal += ages[i];
}
let avgAge = agesTotal / ages.length;
console.log(`The average age is ${avgAge}.`);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

/*Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.*/

const lettersPerName = names.map((name) => name.length);
console.log(lettersPerName);
let total = 0;
for (let i = 0; i < lettersPerName.length; i++) {
  total += lettersPerName[i];
}
let avgLetters = total / lettersPerName.length;
console.log(`The average number of letters per name is ${avgLetters}`);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

const namesConcat = names.reduce((a, b) => a + ' ' + b);
console.log(`The names concatenated and seperated by a space: ${namesConcat}`);

//How do you access the last element of any array?
console.log(
  'To access the last element of any array, type the array name then in brackets type array dot length minus one, to account for the zero based index ex. Array[Array.length - 1]'
);

//How do you access the first element of any array?
console.log(
  'To access the first element of any array, type the array name, then in brackets type 0. Ex. Array[0]'
);

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
add the length of each name to the nameLengths array.*/
let nameLengths = [];
names.forEach((name) => nameLengths.push(name.length));
console.log(nameLengths);

/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
Print the result to the console.*/

let sumEl = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumEl += nameLengths[i];
}
console.log(`The total number of letters in the names array is ${sumEl}`);
// let sumOfArrayEl = nameLengths.reduce((a, b) => a + b);
// console.log(
//   `The total number of letters in the names array is ${sumOfArrayEl}`
// );

/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

const echo = (word, n) => word.repeat(n);
console.log(echo('Hello', 3));

/*Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name 
should be the first and the last name separated by a space). */

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`${fullName('Brendan', 'Eich')}, we are not worthy.`);

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const trueIfOver100 = (nums) => {
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > 100) {
      return true;
    } else {
      return false;
    }
  }
};
let numArray = [444, 333, 222, 111];
console.log(`numArray = ${numArray}`);
console.log(`trueIfOver100(numArray) : ${trueIfOver100(numArray)}`);

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function avgNum(nums) {
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  var age = total / nums.length;
  return age;
}

console.log(`avgNum(numArray) : ${avgNum(numArray)}`);
numArray = [0, 45, 11, 3];
console.log(`numArray = [0, 45, 11, 3]`);
console.log(`avgNum(numArray) : ${avgNum(numArray)}`);

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function firstGreatestAvg(array1, array2) {
  // let first = array1.reduce((a, b) => a + b / array1.length);
  // let second = array2.reduce((a, b) => a + b / array2.length);
  let firstTotal = 0;
  let secondTotal = 0;
  for (let i = 0; i < array1.length; i++) {
    firstTotal += array1[i];
  }
  let firstAvg = firstTotal / array1.length;
  // console.log(firstAvg);
  for (let i = 0; i < array2.length; i++) {
    secondTotal += array2[i];
  }
  let secondAvg = secondTotal / array2.length;
  // console.log(secondAvg);
  if (firstAvg > secondAvg) {
    return true;
  } else {
    return false;
  }
}
let arrayUno = [0, 45, 290, 1];
console.log(`Array Uno : ${arrayUno}`);
let arrayDos = [4, 34, 23, 222];
console.log(`Array Dos : ${arrayDos}`);

console.log(
  `firstGreatestAvg(arrayUno, arrayDos) : ${firstGreatestAvg(
    arrayUno,
    arrayDos
  )}`
);
arrayUno = [0, 465, 20, 11];
console.log(`Array Uno : ${arrayUno}`);
arrayDos = [43, 4, 223, 22];
console.log(`Array Dos : ${arrayDos}`);
console.log(
  `firstGreatestAvg(arrayUno,arrayDos) : ${firstGreatestAvg(
    arrayUno,
    arrayDos
  )}`
);

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5 ? true : false;
}
console.log(`willBuyDrink(true, 20) : ${willBuyDrink(true, 20)}`);
isHotOutside = false;
moneyInPocket = 20;
console.log(`willBuyDrink(false, 20) : ${willBuyDrink(false, 20)}`);
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// let bodyTemp = 98.5;
// let isNautious = false;
function areYouSick(bodyTemp, isNautious) {
  if (bodyTemp < 98.5 && !isNautious) {
    return false;
  } else if (bodyTemp >= 98.5 || isNautious) {
    return true;
  }
}
console.log(`areYouSick(98.5, false) : ${areYouSick(98.5, false)}`);

/*
  I was just thinking about the times we're living in!

  My function is called: areYouSick(), it takes 2 parameters, bodyTemp or body temperature value, and boolean true or false condition isNautious.

  I have an if/else statement inside, where I use a boolean operator to determine if the number/body temperature defined is less than ~or~ equal to/greater than 98.5 and/or if isNautious is true ~or~ is not! If either bodyTemp is 98.5 or higher ~or~ isNautious, areYouSick(), will return true. If bodyTemp is 98.4 or lower ~and~ not!isNautious then areYouSick() will return false.   
*/
