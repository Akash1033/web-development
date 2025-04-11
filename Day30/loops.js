let a =[1,99,55,44,88,77,10,45,86]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

a.forEach((value , index ,arr)=>{
    console.log(value , index , arr)
})

// for in loop
let obj = {
    a: 1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}

// for of loop
for (const value of a) {
    console.log(value)
}