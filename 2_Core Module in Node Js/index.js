let app = require('./app');


console.log(app.x)
console.log(app.y)
console.log(app.z())



let a = 2;
// '==' not match datatype
if(a == '2'){
    console.log("Matched");
}else{
    console.log("not Matched")
} 

// '===' match datatype
if(a === '2'){
    console.log("Matched");
}else{
    console.log("not Matched")
}

let arr= [1 , 45, 23, 34 ,65]
arr.filter((item)=>{
    console.log(item)
})

const file = require('fs');
file.writeFileSync('hello.txt', "code step by step")

