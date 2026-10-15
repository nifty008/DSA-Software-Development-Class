let product1 = "Rice";
let product2 = "Beans";
let product3 = "Garri";
let product4 = "Yam";

console.log(product1);
console.log(product2);

let products = ["Rice", "Beans", "Garri", "Yam", "Noodles", "Fish", "Nuts"];

let amount = [1000, 500, 200, 700, 1900, 880, 450];

console.log(products[1]);

amount.push(300);
products.push("Snail");

console.log(products);
console.log(amount);

console.log(products.length);
console.log(amount.length);

for(let i =0; i < amount.length; i++){
    console.log(amount[i]);
}

let myFavouriteFoods = ["Bread and Beans", "Rice and Stew", "Fufu"];

console.log(myFavouriteFoods[2]);

myFavouriteFoods.push("Pounded yam and Egusi Soup");

console.log(myFavouriteFoods[3]);

console.log(myFavouriteFoods);

for(let i = 0; i < myFavouriteFoods.length; i++){
    console.log(myFavouriteFoods[i]);
}

console.log("\n");

let i = 0;
while(i < myFavouriteFoods.length){
    console.log(myFavouriteFoods[i]);
    i++;
}

let students = [{
    name: "Favour",
    age: 23,
    department: "Linguistics"
    },
    {
        name: "Hassan",
        age: 25,
        department: "Mechanical Engineering"
    },
    {

        name: "Charles",
        age: 37,
        department: "Public Administration"
    }
];

console.log(students[1].name);


let students = [
    {name: "Favour", score: 78, department: "Linguistics"},
    {name: "Hassan", score: 45, department: "Mechanical Engineering"},
    {name: "Charles", score: 62, department: "Public Administration"}

];

console.log(students);

for (let i = 0; i < students.length; i++) {
    if (students[i].score > 50) {
        console.log(students[i].name + " Passed");
    } else {
        console.log(students[i].name + " Failed");
    }
}

for (let i = 0; i < students.length; i++) {
    if (students[i].score > 50) {
        console.log(students[i].name + " Passed");
    } else {
        console.log(students[i].name + " Failed");
    }
}
