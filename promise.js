
// Promise 基礎公式
// new Promise建立新的promise
// 成功(resolve)回傳Success訊息，.then去接取resolve
// 失敗(reject)回傳failed訊息，.catch去接取reject

let p = new Promise((resolve,reject)=>{
    let a =1+1
    if (a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log("This is in the then"+message)
}).catch((message)=>{
    console.log("This is in the catch"+message)
})