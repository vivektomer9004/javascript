// constructor  (singleton)

const tinderUser = new Object()     //singleton

const tinderuser = {}        // non-singleton
tinderuser.id = "123abc";
tinderuser.name = "samay";
tinderuser.isLoggedIn = false;

console.log(tinderuser);
console.log("------------------");

const regularUser = {
    email:"sam@gmial.con",
    fullName:{
        userFullName:{
            firstName:"vivek",
            lastName:"tomer"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);           console.log("---------------------");

// ************* object combination **************

const obj1 ={ 1:"a", 2:"b"};
const obj2 ={3:"c", 4:"d"};

console.log({obj1,obj2});

console.log({...obj1, ...obj2});               console.log("---------------")  //spreading 

console.log(Object.assign(obj1, obj2));             console.log("---------------")

console.log(Object.assign({}, obj1, obj2));         //gud way


// for database values

const users=[
    {
        id:1,
        email:"vivek@gmail.com",
    },
    {
        id:2,
        email:"tomer@gmail.com"
    },
    {
        id:3,
        email:"tomer@gmail.com"
    },
    {
        id:4,
        email:"tomer@gmail.com"
    }
]

const result=users[0].id;                // took element from array container.
console.log(result);                console.log("--------------")


// accessing the values and keys of object to put them in loop.

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));        //array inside array

console.log(tinderuser.hasOwnProperty('isLoggedIn'));       // to find the value
