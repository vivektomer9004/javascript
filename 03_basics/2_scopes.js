let a = 29;
if (true){                                      //scope
    let a = 10;
    const b = 20;
    var c = 40;
}

console.log(a);
// console.log(b);
console.log(c);                                          console.log("----------------")




// *****************hoisting***************************************
// ****************nested scope**************

function one(){
    const userName ="vivek"

    function two(){
        const website =  "yt";
        console.log(userName);
    }
    // console.log(website);

    two()
}

one();                          console.log("-----------------")

if(true) {
    const userName = "vivek";
    if (userName === "vivek"){
        const website = " yt";
        console.log(userName + website)
    }
    // console.log(website);
}
// console.log(userName);                       
console.log("-----------------")

//****************intresting***********/


console.log(addOne(5));                                // we can return the output of a proper declare function before  function decleration.
function addOne(num){
    return num+1;
}
addOne(4);


// console.log(addtwo(4));                                // but here we can't return output and also get error coz here function is declared in a variable form.
const addTwo = function(num){
    return num+2;
}
addTwo(4);