"use script";

let myAge = prompt("Please enter your age", ""); //add changeble human age variable

let earlyYears = 2; //this variable is not changeble

earlyYears *= 10.5;
let laterYears = myAge - 2; // counting the later years of dog without first 2 years
laterYears *= 4; // counting later years of dog
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; // the age of user in dog years;
let myName = prompt("Please enter your Name").toLowerCase();
console.log(
  "My name is " +
    myName +
    ". " +
    "I am " +
    myAge +
    "years old in human years which is " +
    myAgeInDogYears +
    "years old in dog years."
);
alert(
  "My name is " +
    myName +
    ". " +
    "I am " +
    myAge +
    "years old in human years which is " +
    myAgeInDogYears +
    "years old in dog years."
);
