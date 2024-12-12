function asyncFun1(){
  return new Promise((res,rej) => {
      setTimeout(() =>{
        console.log("Some data1..")
       res("Success")
      },2000)
  })
}
function asyncFun2(){
  return new Promise((res,rej) => {
      setTimeout(() =>{
        console.log("Some data2..")
       res("Success")
      },3000)
  })
}

console.log("Fetching data1..")
asyncFun1().then((msg) =>{
  //console.log(msg)
  console.log("Fetching data2..")
 asyncFun2().then((msg) =>{
   //console.log(msg)
  })
})

