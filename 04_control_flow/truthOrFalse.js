const userEmail="v@gmail.com";
if (userEmail) {
    console.log("You have an email");
} else {
    console.log("You don't have an email");
}

// falsey values

// False, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false', " ", [], {}, function(){}


const useremail = [];
if (useremail.length===0){
    console.log("array is empty");
}

const emptyObj= {}
if (Object.keys(emptyObj).length===0){
    console.log("Object is empth");
}                                           console.log("-------------");

// **************************Nullish coalescing operator (??)*******************
// it returns the right side operand when the left side operand is null or undefined otherwise it returns the left side operand.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 16; 
val1 = null ?? 10 ?? 5;  // it will return first not null/undefined value
console.log(val1);  // 5        
console.log("-------------");

//terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("IceTea price is high") : console.log("IceTea price is low");