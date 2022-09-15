// core Module=>path

const path = require("path");

// console.log(path.basename(__filename));
// console.log(__filename);

// //Extension name
// console.log(path.extname(__filename));

// //Parse
// let myParseDetails = path.parse(__filename);
// console.log(myParseDetails);
// console.log(myParseDetails.name);

// //Join
// console.log(path.join(__dirname, "node", "intro-to-node"));

// console.log(__filename);
// console.log(__dirname);

// os module


// const os=require('os');
// console.log("os type ==>",os.type());
// console.log("Os platform ==>",os.platform());
// console.log("Os arch==>",os.arch());
// console.log("Tree Memory ==>",os.freemem());
// console.log("Total Memory ==>",os.totalmem());

// File system

// create Folder

const fs = require('fs'
)
// fs.mkdir(path.join(__dirname, "Node", "ReactJs", "Lecture"), (err) => {
//     if (err) {
//         console.log(err);
//         console.log("Folder already exists");
//         return
//     }
//     console.log("Folder is created");
// })

// Write file

// fs.writeFile(path.join(__dirname, "Node", "ReactJs", "coreModule.txt"), ("Welcome to Node Js!!!"), (err) => {
//     if (err) {
//         console.log(err);

//         return
//     }
//     console.log("Folder is created");
// })

// Read File
// fs.readFile(path.join(__dirname,"Node","ReactJs","coreModule.txt"),"utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);

//         return
//     }
//     console.log(data);
//     console.log(data.toString())
// })

// Http Module
const http = require('http')
require("dotenv").config();
const app = http.createServer((req, res) => {
    res.end("<h1>Hello World </h1>")
})
const port = process.env.PORT || 1990;

// console.log(process.env.CLASS);
app.listen(port, () => {
    console.log(port);
    console.log(process.env.DB_USERNAME);
    console.log(process.env.DB_PASSWORD);
    console.log("Application ia Runs Successfully ");
})