// constantTimeExample

// let numbers = [10, 20, 30, 40, 50];

// console.log(numbers[0]);

// linearTimeExample

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// let students = ["Ada", "John", "Mary", "David", "Grace"];

// for(let i = 0; i < students.length; i++) {
//     if (students[i] === "Mary") {
//         console.log("Found at Index " + i);
//         break;
//     }
// }

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i]);
//     if (students[i] === "Mary") {
//         console.log("Found at Index " + i);
//         break;
//     }
// }

// for(let i = 0; i < students.length; i++) {
//     console.log("Steps: " + [i+1]);
//     if (students[i] === "Grace") {
//         console.log("Found at Index " + i);
//         break;
//     }
// }

// quadraticTimeExampleCumNestedLoop

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(numbers[i], numbers[j]);
    }
}

