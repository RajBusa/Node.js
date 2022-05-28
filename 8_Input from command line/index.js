console.log("Hello World!")


// Run command - node index.js Raj Busa
// output - 
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Code\\Node js\\Video\\8_Input from command line\\index.js',
//   'Raj',
//   'Busa'
// ]
console.log(process.argv)
console.log(process.argv[0])  // C:\Program Files\nodejs\node.exe


const fs = require('fs')
const input = process.argv

// Run command - node index.js apple.txt 'this is a fruit'
fs.writeFileSync(input[2], input[3])

