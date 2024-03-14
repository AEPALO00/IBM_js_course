// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// //Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    // Initial variables
    let fullName   = "Ernesto Villarreal";
    const age      = 25;
    var course     = "js";

    // Reassign variables
    fullName   = "Carlos Villarreal";
    // age     = 26; // Can't reassign; TypeError 
    course     = "html";

    console.log(fullName);   // Carlos Villarreal
    console.log(age);        // 25
    console.log(course);     // html
}

// console.log(fullName);   // Can't be printed
// console.log(age);        // Can't be printed
console.log(course);     // Can be printed

console.log("-------Outside block-------")
// Reassign variables
fullName   = "Edgar Villarreal"; 
age        = 26; // Can be reassigned, but is a new variable
course     = "css";

console.log(fullName);   // Edgar Villarreal
console.log(age);        // 26
console.log(course);     // css