#!/usr/bin/env node
console.log("hey there");
const fs = require("fs");
const util = require("util");
const ycolor = require("yoctocolors");
const path = require("path");
const cwd = process.cwd();
const targetDir = process.argv[2] || cwd;
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

// // Callback based solution: Maintain an array of results from each lstat
// fs.readdir(cwd,(err,filenames)=>{
//   try{
//    //err = {"message":"test error"};
//     if(err){
//       throw new Error(err);
//     }
//     //Callback based solution'
//     console.log(filenames);
//       const allStats= Array(filenames.length).fill(null);
//       for( let filename of filenames){
//         const index  = filenames.indexOf(filename);
//         fs.lstat(filename,(err,stats)=>{
//           err = {"message":"mock error"}

//           try{
//             if(err){
//               throw new Error(err);
//             }
//             console.log(filename, stats.isFile());
//             allStats[index] = (stats);
//             const ready =  allStats.every((stats)=>{ // read about this 
//               return stats;
//             }); // 

//             if(ready){
//               allStats.forEach((stats, index)=>{
//                 console.log(filenames[index], stats.isFile());
//               });
//             }

//           }catch(err){
//             console.log("error inside",err);
//             throw new Error(err);
//           }
//         });
//       }
//       // THE Callback APPROCH ENDS HERE
//   }catch(err){
//     console.log("in catch");
//     console.log(err);
//     throw new Error(err);
//   }finally{
//     return;
//   }

// });

//SOLUTION 2:

// //Wrap the last call with promise
// fs.readdir(cwd, async (err,filenames)=>{
//   try{
//    //err = {"message":"test error"};
//     if(err){
//       throw new Error(err);
//     }
//     for(let filename of filenames){
//       const stats = await lstat(filename);
//       console.log(filename, stats.isFile());
//     }
//   }catch(err){
//     console.log("in catch");
//     console.log(err);
//     throw new Error(err);
//   }finally{
//     return;
//   }

// });




//Promise . all based solution: we fire every call in parallel
// in the previous solution we were serialy processing the data
fs.readdir(targetDir, async (err,filenames)=>{
  try{
   //err = {"message":"test error"};
    if(err){
      throw new Error(err);
    }
 
    const statPromises = filenames.map((filename)=>{
      return lstat(path.join(targetDir,filename));
    });
    const allStats = await Promise.all(statPromises);
    
    for(let stat of allStats){
      const index = allStats.indexOf(stat);
      if(stat.isFile()){
        console.log(ycolor.yellow(filenames[index] ));
      }else{
        console.log(ycolor.bold(ycolor.blue(filenames[index] )));
      }
      //console.log(filenames[index],stat.isFile());
    }
  }catch(err){
    console.log("in catch");
    console.log(err);
    throw new Error(err);
  }finally{
    return;
  }

});

// Method 1;
const lstat_custom_promise = (filename)=>{
  return new Promise((resolve, reject)=>{
    fs.lstat (filename, (err, stats)=>{
      if(err){
        reject(err);
      }
      resolve(stats);
    })
  })
}

// method 2

const lstat_util_promsie = util.promisify(fs.lstat);

// method 3 

const lstat = fs.promises.lstat;

