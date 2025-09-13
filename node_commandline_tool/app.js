console.log("hey there");

const fs = require("fs");

//const process = require("process")
const cwd = process.cwd();
fs.readdir(cwd,(err,filenames)=>{
  try{
    console.log(filenames);
  }catch(err){
    console.log(err);
    throw new Error(err);
  }finally{
    return;
  }

});
