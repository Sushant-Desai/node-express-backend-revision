const path =require("path")

console.log("File name is",__filename );

console.log("Directory name is ",__dirname);

console.log("Done");

const filePath = path.join(
  __dirname,
  "files",
  "test.txt"
);

console.log("File path with join is ",filePath);
