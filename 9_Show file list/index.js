const fs = require('fs')
fs.writeFileSync('file/apple.txt', 'this is an apple')

const path = require('path')
const dirPath = path.join(__dirname)
const dirPath1 = path.join(__filename)
console.log(dirPath)
console.log(dirPath1)

dirPath2 = path.join(__dirname,'file')
console.log(dirPath2)


for(let i = 0; i < 5; i++){
    fs.writeFileSync(`${dirPath2}/hello${i}.txt`, "Hello")
}
fs.readdir(dirPath2, (err, files)=>{
    // console.log(files);
    files.forEach((item) =>{
        console.log(item)
    })
})