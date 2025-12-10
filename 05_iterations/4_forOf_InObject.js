//  for of loop in Objects

const obj = {
    game : "football",
    player: "11",
    team: "2"
}

// for (const key of Object.values(obj)){
//     console.log(key);
// }


// for in loop

for (const key in obj){
    console.log(key);
}
console.log("-------------");

// for full object details

for (const key in obj){
    console.log(key, ':-', obj[key]);
}                                                 console.log("-------------");
//OR

for (const key in obj){
    console.log(`${key} :- ${obj[key]}`);
}                                                     console.log("-------------");


// PPlying same for array

const arr = ["pea", "potato", "carrot"];

for (const index in arr){
    console.log(index, ':-', arr[index]);
}                                                console.log("-------------"); 

// also for single, only value or index no.

for (const i in arr){
    console.log(i);
}                                          console.log("-------------");                   

for (const i in arr){
    console.log(arr[i]);
}                                   console.log("-------------");                          

// for in loop  for map

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("Fr", "France");
map.set("UK" , "United Kindom");
map.set("IN", "India");
map.set("IN", "Bharat");

for(const key in map){
    console.log(map[key]);
}
// it's clear that for in loop doesn't work with maps