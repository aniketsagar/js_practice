#!/usr/bin/env node
console.log("hey there");
const fs = require("fs");

//const process = require("process")
const cwd = process.cwd();

// fs.readdir(cwd,(err,filenames)=>{
//   try{
//     console.log(filenames);
//       // THIS IS A NAIEVE APPROACH 
//       for( let filename of filenames){
//         fs.lstat(filename,(err,stats)=>{
//           try{
//             console.log(filename, stats.isFile());
//           }catch(err){
//             console.log(err);
//             throw new Error(err);
//           }
//         });
//       }
//       // THE NAIEVE APPROCH ENDS HERE
//   }catch(err){
//     console.log(err);
//     throw new Error(err);
//   }finally{
//     return;
//   }

// });

fs.readdir(cwd,(err,filenames)=>{
  try{
   //err = {"message":"test error"};
    if(err){
      throw new Error(err);
    }
    //Callback based solution'
    console.log(filenames);
      const allStats= Array(filenames.length).fill(null);
      for( let filename of filenames){
        const index  = filenames.indexOf(filename);
        fs.lstat(filename,(err,stats)=>{
          err = {"message":"mock error"}

          try{
            if(err){
              throw new Error(err);
            }
            console.log(filename, stats.isFile());
            allStats[index] = (stats);
            const ready =  allStats.every((stats)=>{ // read about this 
              return stats;
            }); // 

            if(ready){
              allStats.forEach((stats, index)=>{
                console.log(filenames[index], stats.isFile());
              });
            }

          }catch(err){
            console.log("error inside",err);
            throw new Error(err);
          }
        });
      }
      // THE Callback APPROCH ENDS HERE
  }catch(err){
    console.log("in catch");
    console.log(err);
    throw new Error(err);
  }finally{
    return;
  }

});
