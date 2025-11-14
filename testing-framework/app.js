#!/usr/bin/env/ node
// We want to make a testing framework for js programs
// look at the supplied list of directories 
// and check if there are any .test.js files present 
// add these files to the run list 
// 
// Test Env setup
const Runner = require("./runner");

console.log("Testing framework init....",process.cwd())

const runner = new Runner();

const run = async ()=>{
  let result = await runner.collectFiles(process.cwd());
  await runner.runTests();
}


run();