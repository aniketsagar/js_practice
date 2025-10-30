#!/usr/bin/env/ node
const chokidar = require("chokidar");
const debounce = require("lodash.debounce");

const start = debounce (()=>{
    console.log("Starting users program");
}, 100);
chokidar.watch(".",{ignored:(path)=>path.endsWith("node_modules")})
    .on ("add",start)
    .on ("change",()=>{console.log("FILE CHANGED")})
    .on ("unlink",()=>{console.log("FILE UNLINKED")});
console.log("Hello!! this is  a node project runner");

