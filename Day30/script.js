let arr =[1,2,5,8,9]
let a =[1,2,3,4,5]
arr[0]= 786
// console.log(arr, typeof arr)
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))

// pop method
console.log(a)
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a.pop())
console.log(a)

// push method
console.log(a.push("Akash"))
console.log(a.push("Akash"))
console.log(a.push("Akash"))
console.log(a)

// shift method is brother of push
console.log(a.shift())
console.log(a)

// unshift method
console.log(a.unshift())
console.log(a)

// delete method
delete a[1]
console.log(a) 

// concat method
let a1 =[1,2,3,4,5]
let a2 =[11,12,13,14,15]
let a3 =[21,22,23,24,25]
console.log(a1.concat(a2, a3))

// sort method 
let num =[4,2,7,9,5,1]
console.log(num.sort())

// splice method
console.log(num.splice(1,3))
console.log(num)
console.log(num.splice(1,1,12,1212))
console.log(num)


// slice method
const x =[1,2,3,4,5,6,7,8,9]
console.log(x.slice(2))
console.log(x.slice(2,8))
