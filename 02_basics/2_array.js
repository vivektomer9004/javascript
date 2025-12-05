const arr1 = ["a","b","c","d"];
const arr2 = ["e","f","g"];

arr1.push(arr2);
console.log(arr1);
// console.log(arr1.push(arr2));

console.log(arr1[4][2]);

console.log("-----------");

console.log(arr1.concat(arr2));

// concat returns a new array but push works on original arrray.

console.log("------------");

// spread

const newArr = [...arr1, ...arr2];
console.log(newArr);
console.log("-------------");

// Flat
const array = [1,2,3,[4,5,6],7,[4,5,6],[3,[4,5]]];
const another_array = array.flat(1);    // 1 is showing the depth of array
console.log(another_array);
console.log("----------");

console.log(Array.isArray("name"));
console.log(Array.from("name"));          // `from` converts string into array 
console.log(Array.from({name:"vivek"}));     // intresting case

let score1= 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   // it tooks all elements in single time