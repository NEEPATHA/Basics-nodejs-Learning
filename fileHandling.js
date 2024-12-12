const file = require("fs")
 
//Sync..
file.writeFileSync('./test.txt',"Hello World");

//Async..
file.writeFile("./test.txt","Hello World Async",(error) => {})

file.writeFile("./Contacts.txt","Neelesh Pathak:7879277199",(error) => {})

//const result =file.readFileSync("./test.txt","utf-8")
//console.log(result)

file.readFile("./Contacts.txt","utf-8",(err,result) =>{
  if(err){
    console.log("Error" ,err)
} else {
  console.log(result)
}
   
})

file.appendFileSync("./test.txt",`Hey There\n`) 
//file.cpSync("./test.txt","./copy.txt")

//file.unlinkSync("./copy.txt")

//---------------------------------
console.log("1")
//Non -blocking
file.readFile("./Contacts.txt","utf-8",(err,result) =>{
  console.log(result)
})
console.log("2");
console.log("3");
console.log("4");

console.log("1")
//blocking
const result =file.readFileSync("./Contacts.txt","utf-8")
console.log(result)
console.log("2");
console.log("3");
console.log("4");

