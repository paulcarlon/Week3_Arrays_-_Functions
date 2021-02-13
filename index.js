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

let avgAge = ages.reduce((a, b) => a + b) / ages.length;
console.log(`The average age is ${avgAge}.`);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
/*Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.*/
const lettersPerName = names.map((name) => name.length);
let avgLettersPerName =
  lettersPerName.reduce((a, b) => a + b) / lettersPerName.length;
console.log(`There are an average of ${avgLettersPerName} letters per name.`);
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
/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
Print the result to the console.*/
let sumOfArrayEl = nameLengths.reduce((a, b) => a + b);
console.log(
  `The total number of letters in the names array is ${sumOfArrayEl}`
);
/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */
const echo = (word, n) => word.repeat(n);
console.log(echo('Hello', 3));
/*Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name 
should be the first and the last name separated by a space). */
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`${fullName('Brendan', 'Eich')}, we are not worthy.`);
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arrayOfNumbers = [4, 6, 57, 433];
const trueIfOver100 = () => {
  let sum = arrayOfNumbers.reduce((a, b) => a + b);
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayOfNumbers);
console.log(`trueIfOver100() : ${trueIfOver100()}`);
console.log((arrayOfNumbers = [11, 22, 33, 4]));
console.log(`trueIfOver100() : ${trueIfOver100()}`);
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgNum() {
  let avgNum = arrayOfNumbers.reduce((a, b) => a + b / arrayOfNumbers.length);
  return avgNum;
}
console.log(`avgNum() : ${avgNum()}`);
console.log((arrayOfNumbers = [0, 45, 11, 3]));
console.log(`avgNum() : ${avgNum()}`);
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let secondArray = [3, 56, 2, 101];
console.log((arrayOfNumbers = [0, 45, 11, 3]));
console.log(secondArray);
function firstGreatestAvg() {
  let first = arrayOfNumbers.reduce((a, b) => a + b / arrayOfNumbers.length);
  let second = secondArray.reduce((a, b) => a + b / secondArray.length);
  if (first > second) {
    return true;
  } else {
    return false;
  }
}
console.log(`firstGreatestAvg() : ${firstGreatestAvg()}`);
console.log((arrayOfNumbers = [0, 45, 11, 3]));
console.log((secondArray = [0, 0, 0, 0.1]));
console.log(`firstGreatestAvg() : ${firstGreatestAvg()}`);
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 20;
function willBuyDrink() {
  return isHotOutside && moneyInPocket > 10.5 ? true : false;
}
console.log(`willBuyDrink() : ${willBuyDrink()}`);
isHotOutside = false;
moneyInPocket = 20;
console.log(`willBuyDrink() : ${willBuyDrink()}`);
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
let bodyTemp;
let isNautious;
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

  My function is called: areYouSick, and it takes in 2 arguments, bodyTemp or body temperature and isNautious, because it sounded better than isPuking.

  I have an if/else statement inside, where I use a boolean operator to determine if the number/body temperature passed as the first argument is less than ~or~ equal to/greater than 98.5 and/or if the second argument is true or false, isNautious ~or~ is not! If either bodyTemp is 98.5 or higher ~or~ isNautious, areYouSick(), will return true. If bodyTemp is 98.4 or lower ~and~ not!isNautious then areYouSick() will return false.   
*/
