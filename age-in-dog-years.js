/* Fist 2 years = 10.5 dog years
After, each year = 4 dog years */

let myAge = 37;
// Create a variable named myAge, and set it equal to your age as a number.

let earlyYears = 2;
// Create a variable named earlyYears equal to 2 

earlyYears *= 10.5;
// Multiplication of the value saved to earlyYears by 10.5 and reassignment to earlyYears.

let laterYears = myAge - 2;
// Ceate a variable called laterYears, where we substract 2 from myAge.

laterYears *= 4;
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
// Create a variable called myAgeInDogYears which sum earlyYears and laterYears.

console.log(myAgeInDogYears);

let myName = "Julien";
// Write your name as a string and store the result in a variable called myName.
console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// Use string interpolation to display the value in a sentence.
