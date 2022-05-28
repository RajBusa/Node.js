let a = 10, b = 10;

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    }, 2000)    
})

waitingData.then((b)=>{
    console.log(a + b)  // 40
})