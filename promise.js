let borrowMoney = new Promise((resolve,reject) =>{

  let friendHasMoney = true;

  if(friendHasMoney)
    resolve("Friend Gave the money");

  else
  reject("Friend denied the request");
})

borrowMoney.then((message) =>{
  console.log("Success!",message)
}).catch(() =>{
   console.log("Failure")
})


// User will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject

var ans = new Promise((resolve,reject) => {
    var n = Math.floor(Math.random()*10)

     if(n<5){
      return resolve();
     } else {
       return reject();
     }
})
 ans.then(() =>{
   console.log("Below")
 }) .catch(() =>{
  console.log("above")
 })

 //---------------------------
 
 var ans = new Promise((res,rej) =>{
  return res ("Sabse phle ghar aoo");
 })


var p2 = ans.then((mess) =>{
  console.log(mess);
  return new Promise ((res,rej) =>{
  return res("Gate Kholo aur gate lgao");
  })
})

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
let p1 =asyncFun1();
p1.then((msg) =>{
  console.log(msg)
})

console.log("Fetching Data2..")
let p3 = asyncFun2();
p3.then((msg) =>{
 console.log(msg)
})