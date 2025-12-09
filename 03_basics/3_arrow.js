// ******************Arrow function********************

// this used in the current context of function

const user = {
    userName: "vivek",
    price: 333,
    welcomemessage : function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage();
// user.userName= "sam";
// user.welcomemessage();

console.log(this);
console.log("----------------");

// function that(){
//     console.log(this);
// }

// that();



const chai = () =>{
    console.log(this);
}
// chai();





const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(3,1));           console.log("-------------");


// ************************* implicit return****************************
// if we use {} then always u should write return keyword but if u use () then no need to write return.

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2,3,4));           console.log("-------------");
// OR
const addfour = (n1, n2, n3, n4) => (n1 +n2 + n3 + n4);
console.log(addfour(1,2,3,4));

// if use object in this way then need to use ()

const obj = () => ({username:"vivek", price:444});
console.log(obj());