console.log("hey there");

import { readdir } from 'node:fs/promises';

let path = "C:\\"
try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
} 


