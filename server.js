const http = require("http")
//const fs = require("fs")
//const url = require("url")
const express = require("express")

const app = express()

app.get('/',(req,res) =>{
  return res.send("Hello From Home Page");
})

app.get('/about',(req,res) =>{
  return res.send("Hello From About Page")
})


function myHandler(req,res){
  
  if(req.url ==='/favicon.ico') return res.end()
    const log = `${Date.now()}:${req.method}${req.url} New Request Received\n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile("log.txt",log,() => {
      switch(myUrl.pathname){
        case '/':res.end("HomePage");
        break
        case '/about':
          const username = myUrl.query.myname
          res.end(`Hi,${username}`)
        break
        case '/search':
        const search = myUrl.query.search_query;
        res.end('Here are your results for'+ search)
        break
        default:
          res.end("404 Not found")
      }
    
  })

}

const myServer = http.createServer(app)

myServer.listen(8000,() =>{
  console.log("Server Started")
})

