const arr = [0,1,2,3,4,5,"anyName"]

console.log(arr[4]);
console.log(arr);

const arr2= new Array(1,2,3,4,5,6);
console.log(arr2);
console.log("-------------")
// ********** Array Methods *************

arr2.push(8)
console.log(arr2)

console.log(arr2.pop());

arr2.unshift(5)
console.log(arr2)

console.log(arr2.shift());
console.log(arr2.includes(20));
console.log("-----------");                                  //push, pop, unshift, shift, includes, join, 

const arr3 = arr2.join();
console.log(arr3);
console.log(typeof arr3);
console.log("--------------")

// slice, splice

const newArr=new Array(1,2,3,4,5,6,7);
console.log("A", newArr);

const myn1= newArr.slice(1,3);
console.log(myn1);
console.log("B", newArr);

const myn2 = newArr.splice(0,2);
console.log("c", newArr);

// slice changes in copy of original array & splice changes in original array