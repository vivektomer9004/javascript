// Immediately Invoked Function Expression (IIFE)

(function iife(){                   // named iife
    console.log(`DB connected`);
})();
console.log("-------------");

// OR

(() => {                            // unnamed iife
    console.log("IIFE with arrow function");
}) ();
console.log("-------------");

// IIFE with parameters

((name) =>{                         // unnamed iife with parameter
    console.log(`hello ${name}, DB is connectedd`);
})("vivek");