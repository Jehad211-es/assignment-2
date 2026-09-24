//Part 1: Node.js Core Modules (10 Grades)
//1
// function currentPath() {
//   console.log({  File: __filename, Dir: __dirname });
// }
// currentPath();
 
//2



//10
// const fs = require("fs");
// fs.unlink('./file.txt', (err)=>{
//   if(err) { return console.log('error');
// }
// console.log("The file.txt is deleted.");
// });


//11-
// const fs = require("fs");
// fs.mkdirSync("route_ass");//
// console.log("success");

// //12-
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("start",()=>
// {
//   console.log("Welcome event triggered!");
// })
// event.emit("start");

//13-
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("login",(name)=>
// {
//   console.log("user logged in: " + name);
// })
// event.emit("login","ahmed");

// //14
// const fs = require('fs');
// const data =fs.readFileSync('./note.txt',"utf8");
// console.log(data);

//15});

// const fs= require('fs');
// fs.writeFile('./async.txt',"Async save",(err)=>{
//   if(err)return console.log("error");
//   console.log("file is written")
// });

//16

// const fs = require('fs');
// if(fs.existsSync('./notes.txt')){
//   console.log("true");
// };

//17



//18
// const fs = require('fs');
// const readStream=fs.createReadStream('./big.txt',{encoding:'utf-8'});
//  readStream.on('open',()=>
// {
//   console.log("file is open")
// });
// readStream.on('ready',()=>{
//    console.log("file is ready")
// });

// let count =1;
// readStream.on('data',(chunk)=>
// {
//   console.log(chunk);
//   console.log("=================");
//   console.log(count++);
// });
// readStream.on('end',()=>{
//    console.log('finished');
// });
// readStream.on('close',()=>
// {
//     console.log('closed');
// })
 

// //19
// const fs = require('fs');
// const readStream=fs.createReadStream('./source.txt',{encoding:'utf8'});
// const writeStream=fs.createWriteStream('./data.txt',{encoding:'utf8'});
// readStream.on('data',(chunck)=>{
//   writeStream.write(chunck);

// });
// readStream.on('end',()=>{
//   writeStream.end;
// })

//20
//مشعارفا احله خالص



// Part2: Simple CRUD Operations Using HTTP 
//1
// const http =require('node:http');
// const fs =require("node:fs");
// const server=http.createServer(handler);
// function handler (req,res)
// {
// if(req.url == '/user' && req.method == 'POST')
//   {
// let body =""
// req.on('data',(chunck)=>
// {
//   body+=chunck;
// })

//   req.on('end',()=>
//   {
// let users = fs.readFileSync('./users.json',{encoding:"utf-8"});

// users=JSON.parse(users);
// body=JSON.parse(body);
// for(let user of users)
// {
//   if (user.email == body.email) { res.writeHead(400); res.end(JSON.stringify({ message: "Email already exists" }));
//    return; 
  
// } 
// }
//  users.push(body);
//  users=JSON.stringify(users);
//  fs.writeFileSync('./users.json',users);
//  res.writeHead(201);
//  res.end(JSON.stringify({
//   message:"user created"

//  }))

// })
//   }
// }
// server.listen(3001, () => 
//   { console.log('server is running on port 3001'); });



//2
// const fs =require('node:fs');
// const http = require("node:http");
// const server = http.createServer(handler); 
// function handler (req,res)
// {
//   if(req.url.startsWith('/user/') && req.method == 'PATCH') 
//   {
// let body ="" ;
// req.on("data", (chunck)=>{
//   body+=chunck;
// })
// req.on("end", ()=>{
//    let data = fs.readFileSync("./user.json",{encoding:"utf-8"});
//       data = JSON.parse(data);
//       let id = req.url.split('/')[2];
//       let user = data.find((user)=>user.id==id);
//       let newdata=JSON.parse(body);

//        user.name = newdata.name;
//       user.age = newdata.age;
//       user.email = newdata.email;

//       fs.writeFileSync("./user.json", JSON.stringify(data));
//       res.writeHead(200);

//       res.write(JSON.stringify({
//         message: "User updated successfully"
//       }));
//     res.end();
// })
//   }

// }
// server.listen(3008, () => { 
//     console.log('server is running on port 3008'); 
// });


//3
// const fs = require("node:fs");
// const http =require("node:http");
// const { json } = require("node:stream/consumers");
// const server = http.createServer(handler);
// function handler(req,res)
// {
//   if(req.url.startsWith('/user/') && req.method == 'DELETE')
//   {
//     let data = fs.readFileSync("./user.json",{encoding:"utf-8"})
//     data = JSON.parse(data);
//     let id = req.url.split('/')[2];
//     data = data.filter((user)=>user.id!=id);
//      fs.writeFileSync("./user.json", JSON.stringify(data));
//       res.writeHead(200);

//         res.write(JSON.stringify({
//        message: "User deleted successfully"
//         }));
//         res.end();

//   }
// }
// server.listen(3007, () => {
//     console.log('server is running on port 3007');
// });



//4
// const http =require('node:http');
// const fs =require("node:fs");
// const server=http.createServer(handler);
// function handler (req,res)
// {
// if(req.url == '/user' && req.method == 'GET')
//   {

// let data = fs.readFileSync('./data.json',{encoding:"utf-8"})
// data = JSON.parse(data);
// res.writeHead(200);
// res.write(JSON.stringify(data));
// res.write(JSON.stringify({
//   message: " done"
// }))
// res.end();
// }
// }
// server.listen(3002, () => 
//   { console.log('server is running on port 3002'); 



// 5
// const http =require('node:http');
// const fs =require("node:fs");
// const server=http.createServer(handler);
// function handler (req,res)
// {
// if(req.url.startsWith('/student/') && req.method == 'GET')
// {
// let data = fs.readFileSync('./students.json', {encoding:"utf-8"})
// data = JSON.parse(data);
// let id = req.url.split('/')[2];
//    let user = data.find((user) => user.id == id);
//     res.writeHead(200);
//  res.write(JSON.stringify(user));
//  res.end();

// }
// }
// server.listen(3003, () => {
//     console.log('server is running on port 3003');
// });