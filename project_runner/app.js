#!/usr/bin/env/ node
const chokidar = require("chokidar"); // to whatch the file 
const debounce = require("lodash.debounce"); // to add time delay in invoking user program
const program = require("caporal")
const fs = require("fs");
const {spawn} = require("child_process");
const ycolor = require("yoctocolors");
console.log("Hello!! this is  a node project runner", spawn);


program 
. version("0.0.1")
.argument("[filename]", "Name of a file to execute, when something changes in the current directory.")
.action(async (args)=>{
    console.log("args",args);     
    const name = args.filename || "app.js";
    try{    
        await fs.promises.access(name);
    }catch (err){
        throw new Error(`Could not find the file ${name}`);
    }
    let process_id = undefined;
    const start = debounce (()=>{
       
        //child_process.spawn(command[, args][, options])
        //https://nodejs.org/docs/latest/api/child_process.html#child_processspawncommand-args-options
       if(process_id){
            
            console.log(ycolor.bold(ycolor.red(`Killing process_id: ${process_id.pid}`)));
            process_id.kill;
        }
        console.log(ycolor.bold(ycolor.blue("Starting process ->>>>>")));
        process_id =  spawn("node",[name],{stdio:"inherit"});

    }, 100);
    chokidar.watch(".",{ignored:(path)=>path.endsWith("node_modules")})
        .on ("add",()=>{
            console.log("FILE ADDED");
            start();
        })
        .on ("change",()=>{
            console.log("FILE CHANGED");
            start();
        })
        .on ("unlink",()=>{
            console.log("FILE UNLINKED");
            start();
        });
});

program.parse(process.argv);