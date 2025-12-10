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
map.set("IN", "India");
map.set("US", "United States of America");
map.set("Fr", "France");
map.set("UK" , "United Kindom");
map.set("IN", "India");
map.set("IN", "Bharat");

// console.log(map);

for(const i of map){
    console.log(i);
}                               console.log("-------------");
// OR

for(const [key, value] of  map){
    console.log(key);
}                                console.log("-------------");  
//or

for(const [key, value] of map){
    console.log(value);
}                                  console.log("-------------");  
//OR

for (const [key, value] of map){
    console.log(key, ':-', value);
}


//********* for of on object***************/

const obj = {
    game : "football",
    player: "11",
    team: "2"
}

// for (const key of obj){
//     console.log(key);
// }                                           

// objects are not iterable like this so another method given in 4_forOf_InObject.js file
