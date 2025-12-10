// for of

// ["","",""]
// [{},{},{}]

const arr = ["name","2","3","4"];

for (const i of arr){
    console.log(`value of array is ${i}`);
}                                               console.log("-------------");

const string ="hello world";
for(const char of string){
    console.log(`each charactor is ${char}`);
}
console.log("-------------");

//Maps

const map = new Map();
map.set("na")