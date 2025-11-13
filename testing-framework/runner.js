const fs = require("fs");
const path = require("path");
class Runner{
  constructor(){
    this.file = []
  }
  
  async collectFiles(targetPath) { 
    const files = await fs.promises.readdir(targetPath);
    return files;
  }

};

module.exports = Runner;