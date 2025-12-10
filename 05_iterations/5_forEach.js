// forEach loop

const arr = ["apple", "banana", "grapes", "mango"];

arr.forEach( function (value) {
    console.log(value);
})  
                                    console.log("-------------");
//OR

arr.forEach( (value) => {
    console.log(value);
})  
                        console.log("-------------");   
//OR

function printMe(value){
    console.log(value);
}
arr.forEach(printMe);                           console.log("---------------")                // call back

//OR

arr.forEach( (value,index,array)=>{
    console.log(`value : ${value}, index  (${index}), array - ${array}`);
    console.log(value, index, array);
});                          console.log("---------------")                // call back with index, value and array 


// forEach with map
const map = new Map();
map.set("men", "vishal");
map.set("women", "sneha");

map.forEach( (value, index, r)=>{
    console.log(value, index, r);
});                          console.log("---------------")               

// forEach with object in array

const arrObj = [
    {
        name1:"vivek",
        name2:"sneha",
        name3:"rahul"
    },
    {
        name1:"sam",
        name2:"ram",
        name3:"sham"
    }
]

arrObj.forEach((item)=>{
    console.log(item);
});                                       console.log("---------------");

arrObj.forEach((item)=>{
    console.log(item.name1);
});