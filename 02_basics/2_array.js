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
