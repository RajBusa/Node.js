const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'crud')
const filePath = dirPath+'/apple.txt'
// fs.writeFileSync(filePath, 'This is an apple')

// fs.readFile(filePath, 'utf8' ,(err, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(err){
//         console.log("file not append")
//     }
// })

// fs.rename(filePath, dirPath+'/fruit.txt', (err)=>{
//     if(err){
//         console.log("file not rename")
//     }
// })

fs.unlinkSync(dirPath+'/fruit.txt', (err)=>{
    if(err){
        console.log("file not deleted")
    }
})