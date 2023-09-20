// ***************arr.push()**************

// let arr = [1,2,3,4,5]
// arr.push(6);
// console.log(arr);

// ***************arr.pop()**************

// let arr = [1,2,3,4,5]
//  arr.pop();
// console.log(arr);

// ***************arr.unshift()**************

// let arr = [1,2,3,4,5]
// arr.unshift(8);
// console.log(arr);

// ***************arr.shift()**************

// let arr = [1,2,3,4,5]
//  arr.shift();
// console.log(arr);

// ***************arr.toString()**************

// let arr = [1,2,"wecode",3,4,5]
// console.log(arr.toString());

// ***************arr.join()**************

// let arr = [1,2,3,4,5]
// console.log( arr.join("**"));

//  let arr = [1,2,3,4,5]
//  let ans = arr.join("$$")
// console.log( ans)

// ***************arr.reverse()**************

//  let arr = [1,2,3,4,5]
// arr.reverse()
// console.log(arr)

// ***************arr.at()**************

// let arr = [1,2,3,4,5]
// console.log(arr.at(-1))

// ***************arr.concat()**************

// let arr = [1,2,3,]
// let ans = [4,5,6,7,8,9]
// console.log(arr.concat(ans))

// ***************arr.foreach()**************

// let arr = [1,2,3,4,5]
// let ans = arr.forEach((value) => {
//     console.log(value);
// })

// ***************arr.find()**************

// let arr = [1,2,3,4,5]
// let ans = arr.find((value) => {
//   return value > 3;
// })
// console.log(ans);

// ***************arr.some()**************

// let arr = [1,2,3,4,5]
// let ans = arr.some((value) => {
//   return value > 3;
// })
// console.log(ans);

// ***************arr.every()**************

// let arr = [1,2,3,4,5]
// let ans = arr.every((value) => {
//   return value > 3;
// })
// console.log(ans);

// ***************arr.findindex()**************

// let arr = [2,22,23,14,5]
// let ans = arr.findIndex((value) => {
//   return value > 4;
// })
// console.log(ans);

// ***************arr.map()**************

// let arr = [2,22,23,14,5]
// let ans = arr.map((value) => {
//   return value*2;
// })
// console.log(ans);

// ***************arr.filter()**************

// let arr = [2,12,23,14,5]
// let ans = arr.filter((value) => {
//   return value > 5 ;
// })
// console.log(ans);

// ***************arr.reduce()**************

// let arr = [2,3,4,6,10]
// let ans = arr.reduce((prev,curr) => {
//     console.log(arr);
//   return prev,curr ;
// })
// console.log(ans);

// let arr = [2,3,4,6,10]
// let ans = arr.reduce((prev,curr) => {
//     console.log(arr);
//   return prev+curr ;
// })
// console.log(ans);

// let arr = [2,3,4,6,10]
// let ans = arr.reduce((prev,curr) => {
//     console.log(arr);
//   return prev+curr ;
// },0)
// console.log(ans);

// let arr = ["we", "code", "we","Academy"];
// let ans = arr.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(ans.length);

// let arr = [1,2,3,4,5]

// let ans = arr.reduce((prev,curr) => {
//     console.log(prev,curr);
//     return prev+curr
// })
// console.log(ans);

// 19. arr.sort() yhe function Array ko alphabate wise print krta h and yhe natural sorting functing h

// Example

//  let arr = ["b","a", "d","c"]
// arr.sort()
// console.log(arr);

//  let arr = ["we","code", "shiv","jajra"]
// arr.sort()
// console.log(arr);

//  let arr = [1,5,3,4,2]
// arr.sort()
// console.log(arr);

//  let arr = [11,5,8,23,44,2]

//  let ans =  arr.sort((a,b) => {
//     console.log("a",a,"b",b);
//     return a-b
//  })
//  console.log(ans);

//  let arr = [11,5,8,23,44,2]

//  let ans =  arr.sort((a,b) => {
//     console.log("a",a,"b",b);
//     return b-a
//  })
//  console.log(ans);

// 20. arr.flat  yhe function 2 array ko jodne ka kam krta hai  but 2 se zyda aaray ko nhi jod skta

// let arr = [ 1,2,3,4]
// let arr2 = [arr,5,6,7,8]
// console.log(arr2.flat());

// let arr = [ 1,2,3,4]
// let arr2 = [arr,5,6,7,8]
// let arr3 = [arr,arr2,5,6,7,8]
// console.log(arr3.flat());

// let arr = [1,2,[3,4],5,6]
// console.log(arr.flat());

// let arr =[1,2,[44,[56,6],7,4,5],4,3,5,]
// console.log(arr.flat());

// let arr =[1,2,[44,[56,6],7,4,5],4,3,5,]   //normal ek sath print krana ka tarika
// console.log(arr.flat(2));

// let arr =[1,2,[44,[56,6],7,4,5],4,3,5,]   //only 6  print krana ka tarika
// console.log(arr[2][1][1]);

// 20. arr.slice yhe functon jo bhi index denge usse 1 km print krta h and 1st index me kha se print krana h and 2nd  kitne index tk  print krane h

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.slice(5,8));

// let arr = [10,20,30,40,50,60,70,80,90]
// console.log(arr.slice(3,7));

// 21. arr.splice yhe function jo index denge vo delte kr deta h 1st index mtlb kha se start jrna h or 2nd index mtlb  kitne element delete krne h or yhe uske baad jo bhi index doge vo print kr dega

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(3,5)
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(3,5)
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(3,5,101,102,103)
// console.log(arr);

// let count = 0;
// setInterval(function changecolor() {
//   if (count % 2 === 0) {
//     document.getElementById("test").style.background = "gray";
//     document.getElementById("image1").style.display = "block";
//     document.getElementById("image2").style.display = "none";
//   } else {
//     document.getElementById("test").style.background = "yellow";
//     document.getElementById("image2").style.display = "block";
//     document.getElementById("image1").style.display = "none";
//   }
//   count++;
// });

// Object Questions
// Question 1
// Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

// let obj ={
//     name : "shiv",
//     class : "year",
//     address : "jaipur"
// }

// console.log(obj.name,obj.class,obj.address);

// Question 2
// Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

// let fn = (obj1,obj2) => {
// let newobj = {}

// for(value of Object.keys(obj1))
// obj1[]

// }

// Question 3
// Write a function that takes an array of objects as an input and returns a new array that contains only the objects that have unique values for a specified key. For example, if the input array contains objects with a "name" key, the function should return an array of objects with unique names.

// Question 4
// Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

// Question 5
// Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

// Array Questions
// Question 1
// Write a function that takes an array of strings as an input and returns a new array where each string has been capitalized (i.e. the first letter of each word is capitalized).

// Question 2
// Write a function that takes an array of numbers as an input and returns the highest product of any three numbers in the array.

// Question 3
// Write a function that takes two arrays as inputs and returns a new array that contains only the elements that are present in both arrays, with no duplicates.

// Question 4
// Write a function that takes an array of strings as an input and returns a new array that contains only the strings that are palindromes (i.e. they are the same forwards and backwards).

// Question 5
// Write a function that takes an array of numbers as an input and returns a new array where each number has been multiplied by 2 if it is even, or by 3 if it is odd.

// Set Questions
// Question 1
// Write a function that takes an array of Sets as an input and returns a new Set that contains only the elements that are present in all of the Sets.

// Question 2
// Write a function that takes an array of numbers as an input and returns a new Set that contains only the numbers that are odd.

// Question 3
// Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set but not the second.

// Question 4
// Write a function that takes an array of Sets as an input and returns a new Set that contains only the unique elements across all of the Sets.

// Question 5
// Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set and the second Set, but not in both.

// Map Questions
// Question 1
// Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the first Map.

// Question 2
// Write a function that takes a Map of numbers as an input and returns a new Map where each key is the square root of the corresponding key in the input Map, and the value is the square of the corresponding value in the input Map.

// Question 3
// Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the second Map.

// Question 4
// Write a function that takes a Map of numbers as an input and returns the sum of the values of all of the even keys in the Map.

// Question 5
// Write a function that takes a Map of strings as an input and returns a new Map where each key is a letter and the value is the number of times that letter appears in the values of the input Map.

// function sum(maths,eng,bio){
//     let count = maths+eng+bio

//     return count
// }

// function percantage(tt){
//     let per = tt/300*100
//     console.log(per);
// }

// let total1 = sum(80,80,90)
// percantage(total1)

// let arr = [
//     {
//         name : "shiv",
//         age : 30,
//         pincode : 654234
//     },

//         {
//         name : "shivraj",
//         age : 35,
//         pincode : 123456
//     },
//         {
//         name : "shiva",
//         age : 40,
//         pincode : 12345
//     }

//     ]

// let ans = arr.some((value) => {
//     return value.age >= 30
// })
// console.log(ans);

// let ans = arr.reduce((total,currvalue ) => {
//     return total+ currvalue.age

// },0)
// console.log(ans);

// let ans = arr.filter((value)=> {
//     return value.age > 30
// })

// console.log(ans);

// let obj ={
//     name : "shiva",
//     age :30,
//     pincode : 6543,
//     address: "jaipur"

// }

// for(let value of Object.entries(obj)){
// console.log(value[1]);
// obj[value[0]  ] = "hello"
// }
// console.log(obj);

// let map = new WeakMap()

// let obj1 ={
//     name :" shiva"
// }
// let obj2 ={
//     age :18
// }

// map.set({name :" aadi"},100);
// map.set({age : 30},200)
// map.set(obj1,300)
// map.set(obj2,400)

// obj2 = null

// for(let i = 1 ; i < 100000;i++){
//     console.log(i);
// }

// console.log(map);

// let arr = [1,2,3,4,5]
// let [one,two, , ,five] = arr

// console.log(one,two,five);

// const arr = [1,2,3,[6,7],5]
// const arr2 = [...arr]
// arr.push(100)
// arr2.push(500)
// arr[3].push(1000)
// console.log(arr,arr2);

// const arr = [1,2,3,[6,7],5]
// const arr2 = JSON.parse(JSON.stringify(arr))
// arr.push(100)
// arr2.push(500)
// arr[3].push(1000)
// console.log(arr,arr2);

// let arr = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let arr3 = [...arr,...arr2]

// // console.log(arr.concat(arr2));
// console.log(arr3)

// let a = 10;
// let b = 20;
// let c = a

// a = b //a=20
// b = c
// a  = c

// console.log(a,b,c);

// let a = 10;
// let b = 20;
// let c = 30 ;

// [a,b] = [b,a] = [c,a] = [c,b]

// console.log(a,b,c);

// function name(){
//     return [1,2,3]
// }
// console.log(name());

// let arr = [1,2,3,[10,20,[100,200,300],30,40],4,5,6,7,8] //2,20,300,8

// let [,two, ,[,twenty,[, ,tinso]], four, , , ,eight] = arr

// console.log(two,twenty,tinso,eight);

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]

// let arr4 = [...arr,...arr2,...arr3]
// console.log(arr4)

// let arr = [1,2,3,4,5]
// let  [one=50,two=150, , ,five = 200 ] = arr

// console.log(one,two,five);

// let arr = [1,2,3,4]
// let [ one,two, , four] = arr

// console.log(one,two,four);

// let arr = [1,2,3,4]
// let [ one,two, , four] = arr

// console.log(two,four,one,);

// let arr = [1,2,[30,40],3,4]
// let arr2 = JSON.parse(JSON.stringify(arr))
// arr.push(100)
// arr2[2].push(500)
// arr2.push(1000)
// console.log(arr,arr2);

// let a = false;

// if (!a) {
//   a = 100;
// }

// a = a ? a : 100;

// a = a || 100;

// console.log(a);

// console.log(null ?? 20);

// let a = undefined;
// a = a || 100;
// a ||= 100;
// console.log(a);

// a = a || false;
// a &&= 100;
// console.log(a);

// a = a ?? 100;
// // a ??= 100;
//  console.log(a);

// a = a + 10;
// a += 10;

// let obj = {
//   address: {
//     pincode: 302012,
//   },
// };
// console.log(obj.address.city); //error

// let obj = {
//   address: {
//     pincode: 302012,
//     subAddress: {
//       city: "Jaipur",
//     },
//   },
// };
// console.log(obj?.address?.sub?.city);

//Exercise 20-----------------------------------------------------------------------------------------------

// 1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

// 1st solution
// function reversestr(str){
//       return [...str].reverse(str)
//   }
// console.log(reversestr("we code"))

// 2nd solution
// let name = "wecode academy"
// let arr = [...name]
// let reverse = arr.reverse()
// console.log(...reverse);

// 2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

// function removefristelement(...arr){
//     let [,...rest] = arr
//     return rest
// }
// console.log(removefristelement(1,2,3,4,5));

// 2nd  ans
// let arr  = [ 1,2,3,4,5,6]
// let  [ ,two,three,four,five,six] =arr
// console.log(two,three,four,five,six);

//3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

// function number(...arr){

// return [].concat(...arr)

// }
// let ans = number([1,2,],[3,4],[5,6])
// console.log(ans);

// 4.Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)

// function property(obj){
//  return  obj?.x ?? 10
// }

// let a =

// a= a ?? 100
// // a && = 100
// console.log(a);

//5. Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

// function oddeven(arr){
//     let oddnum = arr.filter(num =>   num % 2 === 1)
//     let evennum = arr.filter( num => num % 2 === 0)

//      return  [...oddnum,...evennum]
// }
// let ans1 = oddeven([1,2,3,4,5,6,7,8,9])
// uu

// function separateOddEven(arr) {
//   const odd = arr.filter(num => num % 2 !== 0);
//   const even = arr.filter(num => num % 2 === 0);
//   return [...odd, ...even];
// }

// // Example usage:
// let ans = separateOddEven([1, 2, 3, 4, 5, 6]) // [1, 3, 5, 2, 4, 6]

// console.log(ans );

// let count = 1
// function changecolor(){
//     if (count % 2 === 0){
//         document.getElementById("test").style.background ="green"
//     }else {
//          document.getElementById("test").style.background ="yellow"
//     }
//     count++
// }

// let arr = ["green", "red", "yellow", "black", "orange","green", "red", "yellow", "black", "orange","green", "red", "yellow", "black", "orange","green", "red", "yellow", "black", "orange","green", "red", "yellow", "black", "orange","green", "red", "yellow", "black", "orange"];
// let count = 0;
// setInterval(() => {

//   document.getElementById("test").style.backgroundColor = arr[count];
//   count++;

// }, 1000);

// function calculate(num1,num2,fn){
//     fn(num1,num2)
// }
// calculate(10,20,sum)

// function sum(num1,num2){
//     console.log(num1+num2);
// }

// function test (fn){
//     fn(1000)
// }
// test(function (num1){
//     console.log(num1);
// })

// function cal(num1,num2,fn){
//     fn(num1,num2)
// }
// cal(5,7,sum)

// function sum(num11,num12){
//     console.log(num11*num12);
// }

// function print(num,cb){
//     cb(num)
// }
// print("hello",nm)

// function nm(num){
//     console.log(num);
// }

// function print(num,cb){
//     cb(num)
// }
// print(2,nm)

// function nm(num){
//    if(num % 2 === 0){
//     console.log("even",num);
//    }else{
//        console.log("odd",num);
//    }
// }

// function test(num1,num2,symbol){
// if(symbol === "+"){
//    return num1+num2;
// }else if(symbol === "-"){
//    return num1-num2;
// }else if(symbol === "*"){
//    return num1*num2;
// }else{
//     return num1,num2;
// }
//     }
//     let ans = test(2,4,"")

//     console.log(ans);

// window.alert("hello")
// alert("hello")
// prompt("your name")
// confirm("is shiva")

// function sum(num1,num2){
//     console.log(num1+num2);
// }

// function mul(num1,num2){
//     console.log(num1*num2);
// }

// function sub(num1,num2){
//     console.log(num1-num2);
// }

// calculate(10,5,sum)
// calculate(10,5,mul)
// calculate(10,5,sub)

// let arr2 = ["green", "red", "yellow", "black", "orange"];
// function returns(){
//      document.getElementById("test").style.backgroundColor = arr2[count];
//   count++;
// },1000)

//  <div
//       id="test"
//       style="background-color: red; height: 200px; width: 200px"
//     ></div>
// jsonviewer.stack.hu
// Online JSON Viewer

// JSON Viewer - Convert JSON Strings to a Friendly Readable Format

// assianment operator
// airthmetic

// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
// console.log(date.getSeconds());

// date.setDate(20);
// date.setFullYear(2026);
// date.setMonth(8);
// console.log(date);

// Map Questions
// question 1 Create a new Map and add key-value pairs to it.

// let map = new Map()

// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

// console.log(map);

// question 2. Get the value of a specific key in a Map.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

// console.log(map.get("name"));

//question 3. Check if a key exists in a Map.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

// console.log(map.has("name"));

//question 4. Iterate over the keys of a Map using a for...of loop.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

//  map.forEach((values,keys) => {
//     map[keys] = values
// })

// for(value of Object.keys(map)){
//     console.log(value);
// }

// question 5. Iterate over the values of a Map using a for...of loop.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

//  map.forEach((values,keys) => {
//     map[keys] = values
// })

// for(value of Object.values(map)){
//     console.log(value);
// }

//question 6. Iterate over the key-value pairs of a Map using a for...of loop.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

// map.forEach((values,keys) => {
//     map[keys] = values
// })

// for(let value of Object.entries(map)){
//     console.log(value);
// }

//question 7. Convert a Map to an array of key-value pairs.

// let map = new Map()
// map.set("name","shiv");
// map.set("age",18)
// map.set("address","jaipur")

// let arr = [...map]

// console.log(arr.flat());

//question 8. Convert an array of key-value pairs to a Map.

// let arr  = [
//   ['key5', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
// ];

// let map = new Map()

// for(let [key,value] of arr){

//     map.set(key,value)
// }
// console.log(map);

// const keyValueArray = [
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
// ];

// const keyValueMap = new Map();
// for (const [key, value] of keyValueArray) {
//   keyValueMap.set(key, value);
// }

// console.log(keyValueMap);

// Use the forEach() method to iterate over the key-value pairs of a Map.
// Use the Map keys() method to get an iterator for the keys of a Map.
// Use the Map values() method to get an iterator for the values of a Map.
// Use the Map entries() method to get an iterator for the key-value pairs of a Map.
// Use the Map has() method to check if a Map contains a key.
// Use the Map get() method to get the value associated with a key in a Map.
// Use the Map set() method to add a new key-value pair to a Map.
// Use the Map delete() method to remove a key-value pair from a Map.
// Use the Map clear() method to remove all key-value pairs from a Map.
// Use the Object.fromEntries() method to create a new object from a Map.
// Use the Map constructor to create a new Map from an array of key-value pairs.

// > S K:

// A small test

// 1. Ek numbers ka Array bnana hai. Numbers me se jo max number hai vo find out Krna hai but reduce function se Krna hai ye only

// let arr = [1,99,2,3,22,44,11]

// let ans = arr.reduce((max,curr) =>{
//   if( max > curr){
//     return max
//   }else{
//     return curr
//   }

// } )
// console.log(ans);

// sort function se
// let arr = [ 1,2,3,4,5]

// let ans = arr.sort((a,b) => {
//   return b-a
// })
// console.log(ans[0]);

// let arr2 = [ 1,2,3,4,5]

// question 2.. Ek array bnana hai numbers ka aur isme ye btana hai ki kaunsa number kitni bar repeat hua hai

// let arr =[1,2,3,4,1,2,5,3,2,5]

// // let map = new Map()

// const map = new Map();

// if (map.get(1) > -1) {
//   let value = map.get(1);
//   value = value + 1;
//   map.set(1, value);
// } else {
//   map.set(1, 1);
// }
// console.log(map);

// const map = new Map();
// map.set(1, 10);
// if (map.get(1) > -1) {
//   let value = map.get(1);
//   value = value + 1;
//   map.set(1, value);
// } else {
//   map.set(1, 1);
// }
// console.log(map);

// For example
// 1,2,2,4,5,3,5,5

// To answer aana chahiye
// 1:1, 2:2, 4:1, 3:1, 5:5

// 3. Ek array bnana hai numbers ka. Ab is array me kaunsa number sbse jyada bar repeat hua hai vo btana hai. For example: 1,2,2,3,4,5 to answer aana chahiye 2 because 2 numbers 2 bar repeat hua hai.

// 4. Kisi array me total kitne numbers duplicate the vo btana hai. Like 1,1,2,3,4,4,1,2

// To isme total 3 numbers duplicate hai Jo firse repeat hue hai 1,2 and 5

// Ye questions krne hai. 30 minutes hai. 8:30 se revision class start krunga. Tb tak ye questions solve kro

// > S K:
// Apas me discuss krke krlo but krne hai ye

// const arr = [1, 2, 3, 40, 55, 6, 7, 8, 9, 10];
// let ans = arr.reduce((max, currentValue) => {
//   console.log("max", max, "currentValue", currentValue);
//   if (max < currentValue) {
//     return currentValue;
//   } else {
//     return max;
//   }
// });
// console.log(ans);

// const arr = [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
// const map = new Map();
// for (let value of arr) {
//   map.set(value, 1);
// }
// console.log(map);

// const map = new Map();
// map.set(1, 10);
// if (map.get(1) > -1) {
//   let value = map.get(1);
//   value = value + 1;
//   map.set(1, value);
// } else {
//   map.set(1, 1);
// }
// console.log(map);

// [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
// 1 : 1
// 2 : 2
// 3 : 2
// 6 : 1
// 10 : 3
// 4 : 1

// for(let i = 1; i <= 5;i++){

//   blank = ""
//   for(let j = i ; j <= 5; j++){
//  blank = blank + j
//   }
//   console.log(blank);
// }

// for(let i=1;i<=5;i++){
//   let val =""
//   for(let j=i ; j<=5 ; j++)
// val+=j
// console.log(val );

// }

//12345
//2345
//345
//45
//5

// Object Questions
// Question 1
// What is an object in JavaScript?

// javascript me object ek non premitive data type hai , esme keys and value ke jode ke rup me  ek sath sangrahit kiya jata hai.

// Question 2
// What is the difference between dot notation and bracket notation for accessing object properties?

// dot notation ka upyog tb kiya jata  h jb  property name fix ho ya pehle se pta ho.
// dot notation me Object ke bad  sidha property ka nam use kiya jata h
// exp- console.log(obj.propertyname)

// bracket notation ka upyog tb kiya jata hai jb  property ka name dynamic ho .
// brackit notation me obj ke bad property name string me likhte h.
// exp- console.log(obj["property name"])

// Question 3
// How do you loop through the properties of an object in JavaScript?

// let obj ={
//     name : "shivraj",
//     age : 18
// }
// for(let value of Object.keys(obj)){
//     console.log(value);
// }

// for(let value of Object.values(obj)){
//     console.log(value);
// }

// for(let value of Object.entries(obj)){
//     console.log(value);
// }

// Question 4
// What is the difference between an object and an array in JavaScript?

// Question 5
// Write a JavaScript function to convert an object into a list of [key, value] pairs.
//......?

// Question 6
// Write a function that takes an object representing a person and returns their full name.

// function fullname(person){
//     return person.fristname + " "+ person.lastname
// }
// let person = {
//     fristname : "shiv",
//     lastname : "jajra"
// }
// console.log(person);

// Question 7
// Create an Object with your personal details. Now print all the keys of the object in ascending order.

// let personalDetails = {
//        name: "shivraj",
//        age: 18,
//        pincode: 341503,
//        address: "jothwara",
//        city: "jaipur",

// }
// let keys = Object.keys(personalDetails).sort();

// for (let i = 0; i < keys.length; i++) {
//        console.log(keys[i]);
// }

// // 2nd solution

// let key = Object.keys(personalDetails).sort();
// console.log(key);

// Question 8
// Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

// Question 9
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa

// Question 10
// Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

// let obj = {

//     yha property ke andr class likhte h
// }

// Example :-

// let bank =  {

//     bankName: "SBI",
//     accountHolderName: "shivraj",
//     address: "jaipur",
//     mobile: "8005891100",

//     deposit : function (){
//        console.log("deposit function");
//     },

//     withdraw: function (){
//         console.log("withdraw function");
//     }

// }
// console.log(bank.bankName,"\n",bank.accountHolderName,"\n",bank.address,bank.mobile);
// bank.deposit()
// bank.withdraw()

// let bike = {

// bikeNumber : 4200,
// bikeName : "r15",
// bikemailage : "15km/hr",

// enjoy : function(){
//      console.log("Going on visit");
// },

// work : function(){
//     console.log("diffrent place arrive");
// }

// }
// console.log(bike.bikeNumber,bike.bikeName,bike.bikemailage,);
// bike.enjoy()
// bike.work()

// let obj = {
//     name : "wecode",
//     age : 18,
//     address : {
//         pincode : 341503,
//         live  : "jaipur"
//     },

//     sum : function(a,b){
//         console.log(a+b);
//     },

//     12 : 5000

// }

// // console.log(obj.name,obj.age);
// // obj.sum(2,2)

// console.log(obj.address.pincode);
// console.log(obj.address["pincode"]);
// console.log(obj["12"]);
// // console.log(obj.12);  //will not work

// let obj ={
//      name : "shivraj",
//      age : 18,
//      addarCard : 76547654312345,
//      address : {
//         pincode : 7654345,
//         live  : "jaipur"
//      }

// }

// console.log(obj.name);
// console.log(obj["name"]);

// only keys print krane ke liye------------------------
// console.log(Object.keys(obj));
// console.log(Object.keys(obj.address));

// // only values print krane ke liye------------------------
// console.log(Object.values(obj));
// console.log(Object.values(obj.address));

// //keys and values ek sath print karne ke liye ----------------

// console.log(Object.entries(obj));
// console.log(Object.entries(obj.address));

// // yhi kaam for loop se kaise krte hai-------------------------------

// for( value of Object.keys(obj)) {
//     console.log(value);
// }

// for( value of Object.values(obj)) {
//     console.log(value);
// }

// for( value of Object.entries(obj)) {
//     console.log(value);
// }

// "use strict";
// let set = new Set();

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(2)
// set.add(1)
// set.add(3)

// console.log(set);
// console.log(set.size);
// // console.log(set.clear);
// console.log(set.has(2));
// console.log(set.has(12));

// for (value of set) {
//     console.log(value);
// }

// set.forEach((value) => {
//     console.log(value);
// })

// let test = function (value) {
//     console.log(value);
// }
// set.forEach(test)

// let arr = [...set]
// console.log(arr);

// let arr1 = [1, 2, 3, 4, 5, 2, 4, 6, 32, 7, 8]
// const set1 = new Set(arr1)

// const map = new Map()

// map.set(1, 100)
// map.set("name", "wecode")
// map.set("city", "jaipur")
// map.set("marks", [1, 2, 3])

// console.log(map);
// console.log(map.has("name"));
// console.log(map.clear);
// console.log(map.size);
// console.log(map.get("name"));
// console.log(map.get("wecode"));

// for (value of map.keys(map)) {
//     console.log(value);
// }

// for (value of map.values(map)) {
//     console.log(value);
// }

// for (value of map) {
//     console.log(value);
// }

// let arr = ([...map])
// console.log(arr);

// let obj = {}

// map.forEach((value, keys) => {
//     obj[keys] = value
// })

// console.log(obj);

// let str = "10"
// console.log(str.tonumber(str));

// let arr = [1,2,3,4,5]
// let ans = arr.map((value) => {
//     return [value,value*2]
// })
// console.log(ans.flat());

// let arr = [1,2,3,4,5]
// let ans = arr.flatMap((value) => {
//     return [value,value*2]
// })
// console.log(ans);

// let arr = ["shivraj jajra"]

// for(let value of arr){
//     let split = value.split("")
// let ans = split.filter((value) => {
//     return value === "j"
// })
// console.log(ans.length);

// }

// let arr = [11,32,3,4]
// let [one,two] = arr

// console.log(one,two);
// console.log(arr[2]);

// const date = new Date();

// console.log(date);

// const date = new Date();
// console.log(new Date(2025, 1));
// console.log(new Date(2025, 2, 13));
// console.log(new Date(2025, 20, 5));
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date.getMilliseconds());

// date.setFullYear(2025);
// date.setMonth(2);
// date.setDate(20);
// console.log(date);
// console.log(new Date("03/25/2015"));
// console.log(new Date("2023-08-15 12:10:15"));

// function getCurrentDate() {
//   let d = new Date();
//   return `${d.getFullYear()}-${d.getDate()}/${d.getMonth() + 1}`;
// }

// console.log(getCurrentDate());

// console.log(0.3 + 0.2);
// console.log(0.1 + 0.2); //0.3
// console.log(0.3 + 0.4);
// if (0.1 + 0.2 === 0.3) {
//   console.log("Yes");
// } else {
//   console.log("No")
// }

// console.log("sajid" - 12);

// console.log(10_00_00_00);

// console.log(Math.floor(10.56));
// console.log(Math.ceil(10.34));
// console.log(Math.PI);
// console.log(Math.max(2, 3, 4, 5, 68, 9, 10, 12, 15, 1, 2, 3, 4));
// console.log(Math.min(2, 3, 4, 5, 68, 9, 10, 12, 15, 1, 2, 3, 4));
// console.log(Math.min(...[1, 2, 3, 4, 5]));
// console.log(Math.trunc(10.56));
// console.log(Math.round(10.43));
// console.log(Math.round(10.5));
// console.log(Math.round(10.49));
// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.floor(Math.random() * 5) + 1);
// console.log(Math.random() * 5);

// 1. Marksheet print
//     -> Print marks in descending order with subject
//     -> 80 >= Distinction
//     -> All subject marks print
//     -> Total Marks
//     -> Percentage print
//     -> Father Name, Student Name, Roll no, school/college name, Class name print

// let student = {
//   name: "wecode",
//   fatherName: "sajid Ali khan",
//   rollNo: 3434,
//   schoolName: "we code academy",
//   class: "javascript",
//   marks: {
//     hindi: 80,
//     english: 95,
//     maths: 75,
//   },
// };

// -> Print marks in descending order with subject
// let ans = Object.values(student.marks);
// let print = ans.sort((a, b) => {
//   return b - a;
// });
// console.log(print);

// -> All subject marks print
// console.log(Object.values(student.marks));

// -> Total Marks
// let totalMarks = Object.values(student.marks).reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(totalMarks);

// //   -> Percentage print

// const percentage = (totalMarks / (marksArray.length * 100)) * 100;

// console.log(percentage);
// 2. Take an Array

//  -> Filter all odd numbers
// let arr = [1, 2, 3, 4, 5, 33, 22, 100];
// let ans = arr.filter((value) => {
//   return value % 2 === 1;
// });
// console.log(ans);

//     -> Filter all numbers greater than 30 and less than 200
// let arr = [1, 2, 3, 4, 5, 33, 22, 100];
// let ans = arr.filter((value) => {
//   return value >= 30 && value <= 200;
// });
// console.log(ans);

//     -> Convert every odd number to even number
// let arr = [1, 2, 3, 4, 5, 33, 22, 100];
// let ans = arr.map((value) => {
//   return value * 2;
// });
// console.log(ans);

//     -> Print sum of all the numbers
// let arr = [1, 2, 3, 4, 5, 33, 22, 100];
// let ans = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(ans);

// 3. Once upon a time, in a quaint village, lived four brothers - (comma separated names). They were hardworking and compassionate (occupation), tilling the land their ancestors had tended for generations.

// One day, a severe drought struck the village, leaving the fields parched and the crops withering away. The brothers were worried about their livelihood and the well-being of their fellow villagers. Despite their own struggles, they decided to help their community.

// [Eldest brother name], the eldest brother, devised a plan to dig a well that would provide a consistent water source. [Second son], with his engineering skills, designed a simple yet effective irrigation system. [Third son] used his persuasive nature to gather support from the village, while [4th Son], the youngest, tirelessly worked alongside his brothers.

// Their dedication paid off. With the well and irrigation system in place, the village began to flourish again. Crops grew, and the villagers no longer worried about scarcity. The brothers' unity and selflessness had saved the day.

// This tale of four brothers and their unwavering commitment to their community serves as a reminder that compassion, innovation, and teamwork can overcome even the most challenging times.

// let eldestBrotherName = prompt("please fill the Eldest brother name");
// let secondSon = prompt("please fill the Second son");
// let thirdSon = prompt("please fill the third son");
// let fourSon = prompt("please fill the four son");
// let occupation = prompt("please fill the occupation");
// console.log(`Once upon a time, in a quaint village, lived four brothers - ${eldestBrotherName},${secondSon},${thirdSon},${fourSon}. They were hardworking and compassionate ${occupation}, tilling the land their ancestors had tended for generations.

// One day, a severe drought struck the village, leaving the fields parched and the crops withering away. The brothers were worried about their livelihood and the well-being of their fellow villagers. Despite their own struggles, they decided to help their community.

// ${eldestBrotherName}, the eldest brother, devised a plan to dig a well that would provide a consistent water source. ${secondSon},with his engineering skills, designed a simple yet effective irrigation system. ${thirdSon} used his persuasive nature to gather support from the village, while ${fourSon}, the youngest, tirelessly worked alongside his brothers.

// Their dedication paid off. With the well and irrigation system in place, the village began to flourish again. Crops grew, and the villagers no longer worried about scarcity. The brothers' unity and selflessness had saved the day.

// This tale of four brothers and their unwavering commitment to their community serves as a reminder that compassion, innovation, and teamwork can overcome even the most challenging times.`);

// 4. Create a array of Youtube playlist. With objects like below
// [
// {
//     channelName: "EasyCodingBySajid",
//     videoName: "Lecture 1 JavaScript Introduction",
//     playListName: "JavaScript",
//     duration: 20,
//     watched: true
// }
// ]

// Now answer below questions.
//     -> Tell me how many videos you have watched
//     -> Tell me how many minutes you have given to Youtube
//     -> Tell me which videos you have not watched
//     -> Tell me which videos you have watched on a particular channel
//     -> Tell me what is your favourite playlist name

// 5. Create a datetime counter and display in format dd-mm-yyyy hh:mm:ss

// const date = new Date(20 - 8 - 2023);

// console.log(date);

// 6. Print below pattern
//     1 2 3 4 5
//     6 7 8 9 1
//     1 2 3 4 5
//     6 7 8 9 1
//     1 1 1 1 1

// for (let i = 1; i <= 5; i++) {
//   let blank = "";
//   for (let j = 1; j <= 5; j++) {
//     blank +=  j;
//   }
//   for (let j = 6; j <= 9; j++) {
//     blank += j;
//   }
//   console.log(blank);
// }

// 7. Write below code to match a criteria and check a person matches how many criteria's
//     To solve this exercise create a persone object like below
// {
//     name: "Sajid Ali Khan",
//     gender: "M",
//     age: 31,
//     address: {
//         pincode: 302012,
//         city: "Jaipur",
//         state: "Rajasthan"
//     },
//     mobile: 9584354354
// }

//     1. Check if person's name contain more than 2 words?
//     2. Gender female?
//     3. If person lives in Delhi or not?
//     4. Mobile number is present or not?
//     5. Is person older than 30 years?

// 8. Fee calculator. Create array of objects like below
// [
//     {
//         studentName: "Sajid",
//         batchName: "JavaScript",
//         id: 101,
//         fees": [300,2000],
//         teacherName: "Shahrukh"
//     }
// ]

// Answer below questions:
//     1. How many students are studying in a particular batch?
//     2. How many students a particular teacher is teaching?
//     3. Total fee deposited by all the students?
//     4. Total fee deposited by students of a particular batch?
//     5. How many studens have not deposited any fee?

// 9. Take a sentence like
// let str = "My name is Wecode Academy and I teach JavaScript";

// Now do below operations on this String
//     1. convert all characters to lowercase
//     2. replace JavaScript with Nodejs
//     3. Remove any space before or after the string
//     4. Now divide the sentence in two parts
//     5. Convert first part to upper case
//     6. Convert second part to lower case
//     7. Concatenate both the words and print on console

//  1. convert all characters to lowercase

// console.log(str.toLocaleLowerCase());

// console.log(str.replace("JavaScript", "nodejs"));

// let splits = str.split(" ");
// console.log(splits.join(""));

// let slice = str.slice(0, 15);
// let slice2 = str.slice(15);
// console.log(slice, "  ", slice2);

// console.log(slice.toLocaleUpperCase());
// console.log(slice2.toLocaleLowerCase());

// 10. Convert any rupee

// console.log(document);
// let pTag = document.getElementById("hello");
// pTag.style.color = "blue";
// pTag.style.backgroundColor = "red";

// setInterval (() => {
//     pTag.hidden = !pTag.hidden;
// },100)

// console.log(document.getElementById("hello"));

// console.log(document.getElementsByClassName("hello"));
// console.log(document.getElementsByClassName("hellos"));

// document.getElementsByClassName("hello")[1].style.color = "blue"

// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// setInterval(function () {
//   ++seconds;
//   if (seconds === 5) {
//     ++minutes;
//     seconds = 1;
//   }
//   if (minutes === 5) {
//     ++hours;
//     minutes = 1;
//   }

//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// var i = 10;
// console.log(i);
// function test() {
//   //let i = 20;
//   if (10 < 20) {
//     console.log(i);
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     var i = 30;
//     console.log(i); //30
//   }
//   console.log(i); //30
// }
// test();
// console.log(i); //10
// //30 30 10

// let i = 10;
// function test() {
//   let i = 20;
//   if (10 < 20) {
//     // console.log(i);
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     let i = 30;
//     console.log(i); //30
//   }
//   console.log(i); //30
// }
// test();
// console.log(i); //10
// //30 30 10

/* var i = 10;
function test() {
  var i = 20;
  if (10 < 20) {
    //Block scope
    var i = 30;
    console.log(i); //30
  }
  console.log(i); //30
}
test();
if (10 < 20) {
  //Block scope
  var i = 30;
  console.log(i); //30
}
console.log(i); //10 */
//30 30 10

/* let person1 = {
  name: "shivraj",
  age: 19,
  address: {
    pincode: 509412,
    city: "jaipur",
  },
};

let person2 = {
  name: "shiv",
  age: 12,
  address: {
    pincode: 9412,
    city: "peeh",
  },
};

function printdatils() {
  console.log(this);
  console.log(this.name, this.age);
}
printdatils.call(person1);
printdatils.call(person2);
 */

/* let person1 = {
  name: "shivraj",
  age: 19,
  address: {
    pincode: 509412,
    city: "jaipur",
  },
};

let person2 = {
  name: "shiv",
  age: 12,
  address: {
    pincode: 9412,
    city: "peeh",
  },
};

function printdatils() {
  console.log(this);
  console.log(this.name, this.age);
}
printdatils.apply(person1);
printdatils.apply(person2); */

// let person1 = {
//   name: "shivraj",
//   age: 19,
//   address: {
//     pincode: 509412,
//     city: "jaipur",
//   },
// };

// let person2 = {
//   name: "shiv",
//   age: 12,
//   address: {
//     pincode: 9412,
//     city: "peeh",
//   },
// };

// function printdatils() {
//   console.log(this);
//   console.log(this.name, this.age);
// }
// let bind1 = printdatils.bind(person1);
// let bind2 = printdatils.bind(person2);

// bind1();
// bind2();

// imedietly invoke function

// ((a, b) => {
//   console.log(a + b);
// // })(1, 2);

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let i = 1;
// while(i <= 5){
//   console.log( );
// }

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.forEach((value) => {
//   console.log(value);
// });

// let str = "shivraj jajra";

// console.log(str.split("raj", "ja"));

// let arr = [1, 2, 3, 4];

// let ans = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(ans);

/* 
const Animal = function (name, age, legs, color) {
  this.AnimalName = name;
  this.Age = age;
  this.legs = legs;
  this.colors = color;
  this.eat = () => {
    console.log(`${this.AnimalName} Eating`);
  };
  this.sleep = () => {
    console.log(`${this.AnimalName} sleeping`);
  };
};

const lion = new Animal("Lion", 10, 4, "Yellow");
lion.eat();
lion.sleep();
console.log(lion); */

/* const Account = function (name, bankName, age, aadarcardNumber, address) {
  this.HolderName = name;
  this.BankName = bankName;
  this.Age = age;
  this.AadarCardNumber = aadarcardNumber;
  this.Address = address;

  this.deposit = () => {
    console.log("Deposit");
  };
  this.credit = () => {
    console.log("Credit");
  };
};

const wecode = new Account(
  "Wecode Academy",
  "HDFC",
  21,
  38947237430,
  "sanjay Nagar Jothwara Jaipur (raj.) "
);

wecode.deposit();
wecode.credit();

console.log(wecode); */

/* const car = function (company, modelName, speed, avarage) {
  this.CompanyName = company;
  this.ModelName = modelName;
  this.Speed = speed;
  this.Avarage = avarage;
};

const jeep = new car("Mahindra", 2020, "123/Hrs", "12km");
console.log(jeep); */

// const Animal = function (name, color) {
//   this.name = name;
//   this.color = color;
//   this.print = function () {
//     console.log(this.name, this.color);
//   };
// };

// const Tiger = new Animal("tiger", "brown");
// console.log(Tiger);
// Tiger.print();

// const person = function (name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.eat = () => {
//     console.log(`${name} is a eating`);
//   };
// };

// const shivraj = new person("shiv", 18, "brown");
// shivraj.eat();
// console.log(shivraj);

// class country {
//   constructor(cuntryname, fastival) {
//     this.cuntry = cuntryname;
//     this.fastival = fastival;
//   }
//   function() {
//     console.log(`this is function `);
//   }
//   test() {
//     console.log("this is test function");
//   }
// }

// const india = new country("india", "holi");
// india.function();
// india.test();
// console.log(india);

//--------------------------------------------------------------------

// const Animal = function (name, legs, color) {
//   this.name = name;
//   this.legs = legs;
//   this.color = color;
//   this.eat = () => {
//     console.log(`${name} is eating`);
//   };
// };

// const tiger = new Animal("tiger", 4, "brown");
// tiger.eat();
// console.log(tiger);

/* class Animal {
  constructor(name, legs, color) {
    this.name = name;
    this.legs = legs;
    this.color = color;
  }
  eat() {
    console.log(`this  is eating`);
  }
}

const lion = new Animal("lion", 4, "brown");
console.log(lion);
lion.eat(); */

/* class car {
  constructor(name, avarage, color) {
    this.name = name;
    this.avarage = avarage;
    this.color = color;
  }
  speed() {
    console.log(`138km/hrs.`);
  }
}

const honda = new car("honda", 13, "brown");
console.log(honda);
honda.speed(); */
//-----------------------------------------------------------
//get and set
/* class person {
  constructor(name, age, color) {
    this.name = name + "sharma";
    this.age = age;
    this.color = color;
  }
  set newname(personName) {
    this.name = personName + "sharma";
  }
  get newname() {
    return this.name + "peeh";
  }
}

const shiv = new person("shivraj", 18, "brown");
console.log(shiv);
shiv.newname = "prince";

console.log(shiv);
console.log(shiv.newname); */

/* class person {
  #name;
  constructor(name, age, color) {
    this.#name = name + "sharma";
    this.age = age;
    this.color = color;
  }
  set newname(personName) {
    this.#name = personName + "sharma";
  }
  get newname() {
    return this.#name + "peeh";
  }
}

const shiv = new person("shivraj", 18, "brown");
console.log(shiv);
shiv.newname = "prince";

console.log(shiv);
console.log(shiv.newname);
console.log(shiv.name);//will be error */

// let a = 5;
// let b = 10;

// a === 5 ? console.log(10) : console.log(5);
// b === 10 ? console.log(5) : console.log(10);

// [a, b] = [b, a];

// [(a = b)][(b = c)];

// Ek ES6 class bnani hai Account

// Is Account class me ye fields hone chahiye

// 1. Account Holder Name
// 2. Account Type
// 3. Aadhar Card Number - private property
// 4. Current balance - private property
// 5. Transactions array - private property
// 6. Mobile number
// 7. pin - private property

// Account Holder name and account type ke liye getter and setter bnane hain

// Private property ko koi class ke baahar se access ya change ni kr skta hai

// Ye functions bnenge

// withdrawal
// deposit
// pinChange
// printStatement

// Iske bad Object bnaoge Account class ka

// Ye charo functions call karne se phle user se pin puchoge. Agar pin shi btaya tbi kuch kaam hoga

// Withdrawal me current balance kam ho Jana chahiye. Aur jitne paise nikal rhe hain vo ni hain to error message dhikana

// Deposit me paise deposit honge

// Print statement me kitne paise nikale and kitne deposit karvayen hain vo print krvane hain

// Pin change function me old pin puchna hai and then new pin and then confirm new pin

// Sb shi ha to pin change kr dena hai

// Ye assignment tume aaj hi Krna hai evening ya night Tak aur GitHub pr upload krke muje link send krni hai

// Coaching aana chahte ho to Coaching me baithke kr lena otherwise ghar se kro

// Agar is Assignment me koi doubt hai to bta dena abi morning me ye message dekho to m meeting me smja dunga 5-10 minutes me

/* class bank {
  constructor(
    accountHolderName,
    accountType,
    aadharCardNumber,
    currentbalance,
    transactionsArray,
    mobileNumber,
    pin
  ) {
    this.accountHolderName = accountHolderName;
    this.accountType = accountType;
    this.aadharCardNumber = aadharCardNumber || 5000;
    this.currentbalance = currentbalance;
    this.transactionsArray = transactionsArray;
    this.mobileNumber = mobileNumber;
    this.pin = pin;
  }

  set withdrawal(withdrawBalance) {
    this.currentbalance = withdrawBalance;
  }

  set deposit(currentBalance) {
    this.currentbalance = currentBalance;
  }
}

const HDFC = new bank(
  "shivraj",
  "normal",
  987654321,
  1000,
  [200, 1000, 500],
  8005891100,
  1020
);

// console.log(HDFC);

HDFC.withdrawal = HDFC.currentbalance - +prompt("withdrow");
// HDFC.deposit = 100;

if (+prompt("Enter your pin") === 1020) {
  console.log("current Blance : ", HDFC.currentbalance);
} else {
  alert("wrong pin");
} */

// console.log(HDFC.currentbalance);
// console.log(HDFC);

console.log(0 || 2 || 1 || 4 || 1 || 6);
