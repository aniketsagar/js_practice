#!/usr/bin/env/ node
const chokidar = require("chokidar");

chokidar.watch(".",{ignored:(path)=>path.endsWith("node_modules")})
    .on ("add",()=>{console.log("FILE ADDED")})
    .on ("change",()=>{console.log("FILE CHANGED")})
    .on ("unlink",()=>{console.log("FILE UNLINKED")});
console.log("Hello!! this is  a node project runner");

