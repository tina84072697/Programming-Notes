const JennyIsGood = false
const AngelIsGood = true

// 正常函式表達
// function whoIsGood(callback,errorCallback){
//     if(JennyIsGood){
//         errorCallback({
//             name:'Jenny is good',
//             message:':('
//         })
//     }else if(AngelIsGood){
//         errorCallback({
//             name:'Angel is good',
//             message:'Not me'
//         })
//     }else{
//         callback('Yeah,Tina is the best')
//     }
// }

// whoIsGoodCallback((message)=>{
//     console.log('Success:'+message)
// },(error)=>{
//     console.log(error.name+''+error.message)
// })

// 改成promise
// 將callback改成resolve，errorCallback改成reject

function whoIsGoodPromise(){
    return new Promise((resolve,reject)=>{
        if(JennyIsGood){
            reject({
                name:'Jenny is good',
                message:':('
            })
        }else if(AngelIsGood){
            reject({
                name:'Angel is good',
                message:'Not me'
            })
        }else{
            resolve('Yeah,Tina is the best')
        }
    })
}

whoIsGoodPromise().then((message)=>{
    console.log('Success:'+message)
}).catch((error)=>{
    console.log(error.name+''+error.message)
})
