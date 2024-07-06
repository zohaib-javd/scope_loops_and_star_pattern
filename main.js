"use strict";
/*** Assignment ***/
//1. Difference Between Global, Local, and Block Scope:
// Global scope
let globalVariable = 10;
function outerFunction() {
    // Local scope
    let localVariable = 20;
    if (true) {
        // Block scope
        let blockVariable = 30;
        console.log(globalVariable); // accessible
        console.log(localVariable); // accessible
        console.log(blockVariable); // accessible
    }
    console.log(globalVariable); // accessible
    console.log(localVariable); // accessible
    //console.log(blockVariable); // not accessible
}
console.log(globalVariable); // accessible
//console.log(localVariable); // not accessible
//console.log(blockVariable); // not accessible
//2. For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
;
//3. Foreach loop
let fruits = ["Apple", "Banana", "Cherry", "Date", "Mango"];
fruits.forEach((fruits, index) => {
    console.log(`Index ${index}: ${fruits}`);
});
//4. Star Pattern with While Loop:
let rowWhile = 5;
let iWhile = 1;
while (iWhile <= rowWhile) {
    let stars = "";
    let j = 1;
    while (j <= iWhile) {
        stars += "*";
        j++;
    }
    console.log(stars);
    iWhile++;
}
//5. Do-While Loop for Reverse Star Pattern
let rowDoWhile = 5;
let iDoWhile = rowDoWhile;
do {
    let stars = "";
    let j = 1;
    do {
        stars += "*";
        j++;
    } while (j <= iDoWhile);
    console.log(stars);
    iDoWhile--;
} while (iDoWhile > 0);
