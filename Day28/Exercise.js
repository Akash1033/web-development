let random = Math.random();
let num1 = prompt("Enter First number: ");
let oper = prompt("Enter operation:");
let num2 = prompt("Enter Second number: ");

// Convert to numbers
num1 = Number(num1);
num2 = Number(num2);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"  // This will cause an error, consider using "%" instead
};

if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is: ${eval(`${num1} ${oper} ${num2}`)}`);
} else {
    // Faulty calculation
    if (obj[oper]) {
        oper = obj[oper];
    }
    alert(`The faulty result is: ${eval(`${num1} ${oper} ${num2}`)}`);
}
