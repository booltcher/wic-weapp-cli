const fs = require("fs");
const path = require("path");

const removeDir = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    let curPath = path.join(dirPath, file);
    if (fs.statSync(curPath).isDirectory()) {
      removeDir(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(dirPath);
};

module.exports = removeDir;
