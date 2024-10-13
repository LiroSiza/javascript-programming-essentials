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

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    // Inside block
    var newVar = "Initial var";
    let newLet = "Initial let";
    const newConst = "Initial const";

    // Reassign inside the block
    newVar = "Reassigned var";  // Works fine
    newLet = "Reassigned let";  // Works fine
    // newConst = "Reaasigned const"  // Error Assigment to constant variable

    console.log("Inside block:");
    console.log(newVar);
    console.log(newLet);
    //console.log(newConst);
}

console.log("Outside block:");

// Reassign outside the block
newVar = "Reassigned var again"; // Works fine
newLet = "Reassigned let again"; // Error: let is block-scoped
newConst = "Reassigned const again";  // Error: const is block-scoped

console.log(newVar);  // Works fine
//console.log(newLet);  // Error
//console.log(newConst);  // Error