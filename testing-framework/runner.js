const fs = require("fs");
const path = require("path");
const ycolor = require("yoctocolors");

const ignoreDirs  = ["node_modules"];
class Runner{
  constructor(){
    this.testFiles= []
  }

  colorCodeMessage(color,message,options){
    // options {bold:true,italics:true}
    let msg = ycolor[color](message);
    if(options){
      if(options.bold){
        msg = ycolor.bold(msg);
      }
      if(options.italics){
        msg = ycolor.italics(msg);
      }
      
    }
    return msg;
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
        try{
          fn();
          console.log( this.colorCodeMessage(
            "green",`\tOK - ${description}`
            ,{bold:false})
          );
        }catch(err){

          console.log(this.colorCodeMessage(
            "red",`\tX-${description}`,
            {bold:false})
          );
          const message = err.message.replace(/\n/g,"\n\t\t");
          console.log("\t",message);
        } 
      }
      try{

        require(file.name); // this is used to run the files, require executes the files?? 
      }catch(err){
        console.log(this.colorCodeMessage(
          "red","X- Error loading file - \t",
          {bold:false}), file.relPath 
        );
        console.log("\t",err);
      } 
    }
  }


  async collectFiles(targetPath) { 
    const files = await fs.promises.readdir(targetPath);

    for(let file of files){
     
      const filePath = path.join(targetPath, file);
      //console.log("filePath>>>>>",filePath);
      const stats = await fs.promises.lstat(filePath);

      if(stats.isFile() && file.includes(".test.js")){
        this.testFiles.push({name:filePath, relPath:file});
      }else if(stats.isDirectory() && !ignoreDirs.includes(file)){
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