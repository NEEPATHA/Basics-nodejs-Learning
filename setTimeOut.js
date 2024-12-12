function add(a,b){
  return a+b
}

function sub(a,b){
  return a-b;
}

function mod(a,b){
  return a%b;
}

console.log(sub(10,2))

setTimeout(() =>{
  console.log(add(100,14))
},3000)

setTimeout(() =>{
  console.log(mod(15,4))
},5000)


