const fs = require("fs");
const path = require("path");
class Runner{
  constructor(){
    this.files = []
  }
  makePath (srcDir, ){
    ;
  }
  async collectFiles(targetPath) { 
    // targetPath = C:/Users/aniket/Desktop/aaa.txt
    //
    let currPath = targetPath;
    const files = []; // store full path of files 
    const visitedFolders = {
      // folderName with srcPath proj/src : true  proj/src/img:true
    }
    const neighbours = []; // folders with full path
    /**
     * read dir of a path
     * if the name ends with .x then its 
     */
      const result = await fs.promises.readdir(targetPath,{
        encoding:"utf-8"
      })
      console.log(result);
      visitedFolders[targetPath] = true;

      for(let file of result){
            
        // if( visitedFolders[targetPath] && neighbours.length === 0){
        //   break;
        // }
        console.log(files);
        // read dir for a path
        console.log("CUrrent Path--------->",currPath,targetPath)
        console.log("Neighbours ---> ", neighbours);
        console.log("visitedFolders ---->",visitedFolders);
        console.log(visitedFolders[targetPath], neighbours.length)
        
        if(neighbours.length > 0){
          console.log(neighbours,currPath)
          currPath = path.join(currPath,neighbours.pop());
          console.log(currPath)
        }
        console.log(file,result)
        const filePath = path.join(currPath ,file);
        
        console.log("filepath::: -----", filePath,!visitedFolders[filePath]);
        if(!visitedFolders[filePath]){
          const stats = await fs.promises.lstat(filePath);
          if(stats.isDirectory()){
            console.log("here")
            neighbours.push(filePath);
            let newFiles = await fs.promises.readdir(filePath,{encoding:"utf-8"});
            result.push(...newFiles);
          }else if(stats.isFile() && file.includes(".test.js")){
            files.push(filePath);
            console.log("here111",files)
          }
        }
       
      }

      // result.map(async (file)=>{
      //   const filePath = path.join(currPath ,file);
      //   console.log("filepath::: -----", filePath,!visitedFolders[filePath]);
      //   if(!visitedFolders[filePath]){
      //     const stats = await fs.promises.lstat(filePath);
      //     console.log("stats",stats)
      //     if(stats.isDirectory()){
      //       console.log("here")
      //       neighbours.push(filePath);
      //     }else if(stats.isFile() && file.includes(".test.js")){
      //       files.push(filePath);
      //       console.log("here111",files)
      //     }
      //   }
      // })
     
    

   return files;

  }

};

module.exports = Runner;