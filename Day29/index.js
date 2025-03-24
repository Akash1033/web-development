console.log("This is string tutorial")
let a = "akash";
console.log(a)
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length)

let myname = "Akash";
let brother = " Aman";
console.log("my name is " + myname +" and my brother is "+brother);
// string literal
console.log(`my name is ${myname} and my brother is ${brother}`)
// escape Sequence character(\)
let abc ="Akash\"s";
console.log(abc)
// \n :- newline
// \t:- tab
// \r:- carriage return

let b= "rahul"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(0,4)) // 4th letter does not included
console.log(b.slice(2))

console.log(b.replace("hul", "vindra jadeja"));  // it replace the first occurance of word
console.log(b.concat(a))
console.log(b.concat(a, "Aman", "GAGAN"))

let x = "      akash    vohra";
console.log(x)
console.log(x.trim())