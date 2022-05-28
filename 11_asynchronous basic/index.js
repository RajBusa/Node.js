console.log("1st line")

setTimeout(()=>{
    console.log("2nd line")
},2000)
console.log("3rd line")


let a = 10, b = 10;
setTimeout(()=>{
    b = 30;
}, 2000)
console.log(a + b)  // 20