#!/usr/bin/env/ node
const chokidar = require("chokidar"); // to whatch the file 
const debounce = require("lodash.debounce"); // to add time delay in invoking user program
const program = require("caporal")

const start = debounce (()=>{
    console.log("Starting users program");
}, 100);
chokidar.watch(".",{ignored:(path)=>path.endsWith("node_modules")})
    .on ("add",start)
    .on ("change",()=>{console.log("FILE CHANGED")})
    .on ("unlink",()=>{console.log("FILE UNLINKED")});
console.log("Hello!! this is  a node project runner");


program 
. version("0.0.1")
.argument("[filename]", "Name of a file to execute")
.action((args)=>{
    console.log(args);
});

program.parse(process.argv);