const fs = require("fs");
const path = require("path");
class Runner{
  constructor(){
    this.testFiles= []
  }
  async runTests(){
    for(let file of this.testFiles){
      // global is on node env scope, like windows variable in browser, 
      // and is shared between file
      const beforeEachList = [];
      global.beforeEach = (fn)=>{
        beforeEachList.push(fn)
      }
      global.it = (description, fn)=>{
        beforeEachList.forEach((func)=>{
          return func();
        });
        fn();
        console.log(description);
      }
      
      require(file.name); // this is used to run the files, require executes the files?? 
    }
  }


  async collectFiles(targetPath) { 
    const files = await fs.promises.readdir(targetPath);

    for(let file of files){
     
      const filePath = path.join(targetPath, file);
      //console.log("filePath>>>>>",filePath);
      const stats = await fs.promises.lstat(filePath);

      if(stats.isFile() && file.includes(".test.js")){
        this.testFiles.push({name:filePath});
      }else if(stats.isDirectory()){
        const childFiles = await fs.promises.readdir(filePath);
        files.push(...childFiles.map((childFile)=>{
          return path.join(file,childFile)
        }));
      }
    }

    return this.testFiles;
  }

};

module.exports = Runner;