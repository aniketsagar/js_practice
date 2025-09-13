#!/usr/bin/env node
console.log("hey there");
const fs = require("fs");

//const process = require("process")
const cwd = process.cwd();
fs.readdir(cwd,(err,filenames)=>{
  try{
    console.log(filenames);
      // THIS IS A NAIEVE APPROACH 
      for( let filename of filenames){
        fs.lstat(filename,(err,stats)=>{
          try{
            console.log(filename, stats.isFile());
          }catch(err){
            console.log(err);
            throw new Error(err);
          }
        });
      }
      // THE NAIEVE APPROCH ENDS HERE
  }catch(err){
    console.log(err);
    throw new Error(err);
  }finally{
    return;
  }

});
