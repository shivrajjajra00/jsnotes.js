// -------------------------------EXERCISE 1 ----------------------------------

// Question 1
// Print 1 to 10 using ++ operator

// let i = 1;
// console.log(i);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);

// Question 2
// Print 10 to 1 using -- operator

// let i = 10;
// console.log(i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);
// console.log(--i);

// Question 3
// Check output of following in console

// 1+1
// console.log(1 + 1); //2
// 1+200
// console.log(1 + 200); //201
// 200+"300"
// console.log(200 + "300"); //200300
// "learnjavascript" + 400
// console.log("learnjavascript" + 400); //learnjavascript400

// Question 4
// Check result of following

// console.log(2 === 2); //true
// console.log(2 == "2"); //true
// console.log(2 === +"2"); //true
// console.log("learnjavascript" == "learnjavascript"); //true
// console.log("LearnJavascript" == "learnjavascript"); //false
// console.log(0.3 == 0.3); //true
// console.log(1.0 == 1); //true
// console.log(1.0 === 1); //true

// Question 5
// Create 5 variables for your bank account details. It would be better if you use let, const and var all 3

// let name = "shivraj";
// let age = 18;
// let myAddress = "jaipur";
// let bankName = "PNB";
// let ifscCode = 4843894787433;

// console.log(name, age, myAddress, bankName, ifscCode);

// Question 6
// Write any code and explain that code using multi line comment

/*-------*/
/* let name = "shiva"
let age = 18 */

// Question 7
// Write difference between Process and Thread

// Question 8
// Write differences between let, const and var

// Question 9
// Give 1 example of each operator with expected output:

// **
// console.log(3 ** 4);  //81
// // %
// console.log(3 % 4); //3
// // !=
// console.log(3 != 4); //true
// // !==
// console.log(3 !== 4); //true
// // <=
// console.log(3 <= 4); //true
// // >=
// console.log(3 >= 4); //false

// Question 10
// Write in your own language. What is JavaScript? Explain in detail.

// -----------------------------------EXERCISE 3 ---------------------------------------------------------------

// Question 1
// Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail.

// let marks = 55;
// if (marks >= 60) {
//   console.log("congrulation you are pass");
// } else {
//   console.log("are waah tu to fail ho gya congrats");
// }

// Question 2
// Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even

// let num = 3;
// let num2 = 4;
// if (num % 2 === 0 && num2 % 2 === 0) {
//   console.log("EVEN");
// } else {
//   console.log("ODD");
// }

// Question 3
// Take 4 variables a, b, c, d and assign their values in the way mentioned below and check output: a = b b = c c = d d = a

/*  let a = 10;
let b = 20;
let c = 30;
let d = 40;

a = b; //a=20
b = c; //b=30
c = d; //c=40
d = a; //d =20 

console.log(a, b, c, d);  */

// Question 4
// Print 2's table using ** operator. Use any logic but it should print 2's table.
/* 
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 2 + 2);
console.log(2 ** 3);
console.log(2 ** 3 + 2); */

// Question 5
// Check output of following and validate your answers

/* console.log(2 + 5 * 10 - 20 ** 2); //-348
console.log((20 / 5) * 10 + 10); //50 */

// Question 6
// Take a number and check if number is odd or not. If number is Odd then print Yes else print No
/* let num = 5;
if (num % 2 === 0) {
  console.log("yes");
} else {
  console.log("no");
} */

// Question 7
// Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print no

/* let num = 20;
if (num % 10 === 0 && num % 5 === 0) {
  console.log("yes");
} else {
  console.log("no");
} */

// Question 8
// Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No
/* let num = 5;

num * 20 === 100 ? console.log("yes") : console.log("no"); */

// Question 9
// Calculate your 10th percentage and print Pass or Fail if marks are more than 70 then print Pass else print Fail

/* let percentage = 55;

percentage >= 70
  ? console.log("congrulation your pass")
  : console.log("you are fail"); */

// Question 10
// Take your age and check if your age is greater than 21 then print Adult else print Minor

/* let myAge = 19;

myAge >= 21 ? console.log("adult") : console.log("minor"); */

// Question 11
// Convert all if-else solutions to ternary operator solution. So instead of using if-else, use ternary operator.

// Question 12
// Implement mark-sheet logic

// Take a field percentage
// If percentage is >= 80 then print Distinction
// If percentage is >= 60 and < 80 then print First division
// If percentage >= 33 and < 60 then print Second division
// if percentage < 33 then print Fail

/* let percentage = 11;

if (percentage >= 80) {
  console.log(percentage, "distinction");
} else if (percentage < 80 && percentage >= 60) {
  console.log(percentage, "frist divison");
} else if (percentage < 60 && percentage >= 33) {
  console.log(percentage, "second divison");
} else {
  console.log(percentage, "Fail");
} */

// Question 13
// Find maximum of 2 numbers

/* let num1 = 10;
let num2 = 30;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("equal are same");
} */

// Question 14
// Find maximum of 3 number

/* let num1 = 30;
let num2 = 0;
let num3 = 0;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2) {
  console.log(num3);
} else if (num1 === num2 && num1 === num3) {
  console.log("three are equal");
} else if (num1 === num2) {
  console.log("num1 and num2 are equal");
} else if (num2 === num3) {
  console.log("num2 and num3 are equal");
} else if (num1 === num3) {
  console.log("num1 and num3 are equal");
} */

// -----------------------------------------Exercise 4 -----------------------------------------------------------

// Question 1
// Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.

// let a = 10;
// let b = 20;
// let sum = 100;
// console.log(sum - (a + b));

// Question 2
// Ask the below questions:

// What is your English marks in 10th?
// What is your Science marks in 10th?
// What is your Math marks in 10th?
// What is your Hindi marks in 10th?
// What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers.

// let english = Number(prompt("what is your english marks"));
// let hindi = Number(prompt("what is your hindi marks"));
// let math = Number(prompt("what is your math marks"));
// let science = Number(prompt("what is your science marks"));
// let computer = Number(prompt("what is your computer marks"));

// let total = english + hindi + math + science + computer;
// let percentage = (total / 500) * 100;
// console.log(percentage);

// Question 3
// In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century.
// let birthyear = Number(prompt("which century were your born"));
// let century = Math.floor(birthyear / 100) + 1;
// console.log(century);

// Question 4
// Add 20 in your name and check value in console.
/* console.log("name" + 20);

// Add true to your name and check output
console.log("name" + true);
// Add 30+"learnjavascript" and check type of the final value.
console.log(30 + "javscript");

// Question 5 */
// Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.
/* let ans = prompt("do you want to drink tea & coffee ");

if (ans === "coffee") {
  console.log("tea");
} else if (ans === "tea") {
  console.log("coffee");
} else {
  console.log("worng chocie");
} */

// For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.

// Question 6
// Test below conditions using &&, || and not logical operators. Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are true then check if number is less than 100 or number is 84 or not.

/* let num = 19;
if (num % 2 === 0 && num % 4 === 0 && (num <= 100 || num === 84)) {
  console.log("yes");
} else {
  console.log("no");
} */

// Question 7
// Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot

/* let temprature = 31;

if (temprature <= 10) {
  console.log("very cold");
} else if (temprature <= 30 && temprature > 10) {
  console.log("cold");
} else if (temprature <= 40 && temprature > 30) {
  console.log("hot");
} else {
  console.log("very hot");
} */

// Question 8
// Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions

// What is your name ?
// What is your aaadhar number ?
// What is your address?
// What is your mobile number? And print all these details in console. If click on cancel then show message "Sorry, please visit again."
/* let yourAge = Number(prompt("what is your Age"));

if (yourAge >= 18) {
  let yourName = prompt("what is your name?");
  let aadarNumber = Number(prompt("What is your aaadhar number?"));
  let address = prompt("What is your address?");
  let mobileNumber = Number(prompt("What is your mobile number?"));

  console.log(yourName);
  console.log(aadarNumber);
  console.log(address);
  console.log(mobileNumber);
} else {
  alert("sorry you are child ");
}

console.log(yourName);
console.log(aadarNumber);
console.log(address);
console.log(mobileNumber); */

// Question 9
// Create a simple calcultor. Firslty ask your about the operation. Like "What do you want to do?" User can type choice in any way like +,- or plus, minus or add, sub etc. After that ask user about first number and then second number and finally show the desired output.
/* let question = prompt("What do you want to do?");

let num1 = Number(prompt("Enter your frist Number"));
let num2 = Number(prompt("Enter your second Number"));

if (question === "+") {
  console.log(num1 + num2);
} else if (question === "-") {
  console.log(num1 - num2);
} else if (question === "*") {
  console.log(num1 * num2);
} else if (question === "/") {
  console.log(num1 / num2);
} else {
  alert("wrong choice");
} */

// Question 10
// Who is most intelligent in your family? Ask 10th percentage of each family member and check who got the highest marks. If total family members are more than 4 then you can use Math.max() function

// let familyPercentage = (30, 40);

// console.log(Math.max(familyPercentage));


