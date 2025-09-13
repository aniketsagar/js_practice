console.log("hey there");

const fs = require("fs");

fs.readdir(".",(err,filenames)=>{
  try{
    console.log(filenames);
  }catch(err){
    console.log(err);
    throw new Error(err);
  }finally{
    return;
  }

});
