// console.log("Hey Guys ! I am learning javascript")

let age = 90;
// let grace=2;

// Arithmetic Operators
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

// Assignment Operators
// age += grace
// console.log(age)
// age -= grace
// console.log(age)

// Comparison Operator
// if(age==18){
//     console.log("You can drive...")
// }

// if-else Ladder
if (age >= 18 && age < 75) {
  console.log("You are Adult.");
  console.log("You can drive...");
} else if (age < 18) {
  console.log("Your age is " + age);
  console.log("bacha hai Tu.. Doodh pee ja ke");
} else if (age >= 75) {
  console.log("You are too old for driving .");
  console.log("I am Suggesting to take rest at home...");
} else {
  console.log("you can't drive...");
}


// ternary operators used to reduce the if else work
x = 10;
y = 20;
let z = x < y ? (x ** y) :( x - y);
console.log(z)