// object declares as literals also as constructors.
// if it will make as constructor then always make as singleton but not in literals.

// object literals

const mySym = Symbol("somthing")   // Important

const jsUser = {
    [mySym] : "key",       // access of a symbol
    name:"vivek",
    "full name":"vivek tomer",           // decleration  took as string.
    age :29,
    email:"vivek@gmail.com",
    isLogIn:false,
    lastLoginDays:["mon","fri"]
}

console.log(jsUser.email);     // OR
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);             // accessing of symbol

jsUser.email="vivekt23@gmail.com";
console.log(jsUser["email"]);

// ************freez or lock object***********

// Object.freeze(jsUser);   
jsUser.name="vooo";             //freeze fun  is used so name will not change
console.log(jsUser);
console.log("----------------")

jsUser.greeting= function(){
    console.log("hello in the code");
}

jsUser.greeting2= function(){
    console.log(`hello in the code, ${this.name}`);
}

console.log(jsUser.greeting());          // first unfreeze the object
console.log(jsUser.greeting2());