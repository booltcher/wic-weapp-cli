const fs = require("fs");
const path = require("path");
const createDir = (pathValue) => {
  if (fs.existsSync(pathValue)) {
    return true;
  }
  if (createDir(path.dirname(pathValue))) {
    fs.mkdirSync(pathValue);
    return true;
  }
};

module.exports = createDir;
