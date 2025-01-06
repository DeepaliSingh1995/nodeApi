const http = require('http')
const data = require('./data')
const { json } = require('stream/consumers')

http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-type':'application\json'})
resp.write(JSON.stringify(data))
resp.end() 
}).listen(4000)