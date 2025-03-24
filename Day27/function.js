function nice(name) {
    console.log("Hey "+ name + " You are nice!")
    console.log("Hey "+ name + " You are good!")
    console.log("Hey "+ name + " You are star!")
}

function sum(a,b, c=5) {
    return a+b*c;
}
let result=sum(4,5)
console.log("calculation Result "+result);


// Arrow Function
const func1 = (x)=>{
    console.log("I am an Arrow function", x)
}
func1(34);
func1(44);
func1(84);