console.log("Hello, World!");

console.log("\n");

console.log("Welcome to the zoo!");

let myName = "Ada";

let age = 20;

let address = "35, Waidi Kehinde Street, Ayetoro, Lagos";

let score = 50;

let myBestColour = "green";

let my_best_artist = "Dunsin Oyekan";

let isAlive = true;

let iDontUnderstand = false;

console.log(isAlive);

console.log(iDontUnderstand);


console.log("\n");

console.log(`Everything Ada said is ${iDontUnderstand}`);

console.log("\n");

let question = "Is Ada a girl?";

console.log(`${question} ${isAlive} or ${iDontUnderstand} because she looks so much like a boy`);

console.log("\n");

console.log(`My name is ${myName}`);

console.log("\n");

console.log(`I am ${age} years old`);

console.log("\n");

console.log(`I live at ${address}`);

console.log("\n");

console.log(`My score is ${score}`);

console.log("\n");

console.log(`My favorite colour is ${myBestColour} and I love it so much `);

console.log("\n");

console.log(`My favorite artist is ${my_best_artist}`);


console.log("\n");

let x = 30;
let y = 100;

let sum = x + y;
let product = x * y;
let difference = x - y;
let quotient = x / y;
let remainder = x % y;
let firstComparison = x > y;
let secondComparison = x < y;
let thirdComparison = x !== y;
let fourthComparison = x === y;

console.log("The sum is", sum); 
console.log("The product is", product);
console.log("The difference is", difference);
console.log("The quotient is", quotient);
console.log("The remainder is", remainder);
console.log("The first comparison is", firstComparison);
console.log("The second comparison is", secondComparison);
console.log("The third comparison is", thirdComparison);
console.log("The fourth comparison is", fourthComparison);

console.log("\n");

let mark = 70;

if(mark > 50){
    console.log("Passed");
} else {
    console.log("Failed");
}

console.log("from for loop");
for(let i= 0; i < 10; i++) {
    console.log(i);
}

console.log("\n");

console.log("from while loop");

let b = 1;
while(b <= 10){
    console.log(b);
    b = b + 1;
}

console.log("\n");

function greeting(myName){
    console.log("Good afternoon, " + myName);
}
greeting("Abigail");

console.log("\n");

let studentName = "Esther";

let newScore = 60;

if (newScore < 40) {
    console.log(studentName + " has passed the exam");
} else {
    console.log(studentName + " has failed the exam");
}

let newAge = 15;

if(newAge > 13){
    console.log("Child");
} 

if(newAge >= 13 && newAge <= 17){
    console.log("Teenager");
}

if(newAge < 18) {
    console.log("Adult");
}