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

