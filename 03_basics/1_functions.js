// function is a bunch of code which can be used anywhere nd many times

function myName(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}

myName();                  console.log("-----------")  // myName is function refrence and myName() is function execution.


function add2Numbers(no1, no2){               //here no1 & no2 are perameters
    console.log(no1 + no2);
}
add2Numbers(3,2);                             // here 2 & 3 are arguments

console.log("-------------");
// OR

function addNumbers(n1, n2){
    // let result = n1+n2;                //      __
    // return result;                     //        |--> scope
    return n1+n2;                         //      __|
}
const result = addNumbers(9,3);
console.log(result);

console.log("---------------");

//************* use of if ***************
function loginUser(username = "name"){                      // if username is not given then always it pass always value that is "name".
    if (username === undefined){                            // also written as !username which mean username not found
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUser("vivek"));            console.log("-------------")


// if no idea of no. of arguments ************** here ... mean  rest operator

function calculateCartPrice(...num){                              // also give (val1, val2, ...num)   val1 and val2 will take starting values autometic
    return num;
}

console.log(calculateCartPrice(200,43,23432,23211,22));


//************ object in function *************

const user ={
    username:"vivek",
    price:233
}

function handleObject(anyobject){
    console.log(`username is  ${anyobject.username} and price is ${anyobject.price}`);
    return;
}

handleObject(user);                console.log("-----------------");
// OR
handleObject({
    username:"sam",
    price:544
});                                console.log("-----------------");


//***********array in function***************

const newArray = [34,543,12,1];

function handleArray(anyArray){
    return anyArray[2];
    
}

console.log(handleArray(newArray));
// OR
console.log(handleArray([43,3,1,2]));