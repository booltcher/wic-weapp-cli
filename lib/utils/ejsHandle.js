const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
// const { promisify } = require("util");
// const renderFilePromise = promisify(ejs.renderFile)

const compile = (templateName, data) => {
  const prefixName = templateName.split(".")[0];
  const tplPostion = ["component", "page"].includes(prefixName)
    ? `../templates/${prefixName}/${templateName}`
    : `../templates/${templateName}`;
  const tplPath = path.resolve(__dirname, tplPostion);

  return new Promise((resolve, reject) => {
    ejs.renderFile(tplPath, { data }, {}, (err, res) => {
      if (err) {
        return;
      }
      resolve(res);
    });
  });
};

const writeToFile = (path, content) => {
    return fs.promises.writeFile(path, content)
}

const generateDirSync = (pathValue) => {
    if (fs.existsSync(pathValue)) {
        return true
    }
    if(generateDirSync(path.dirname(pathValue))){
        fs.mkdirSync(pathValue)
        return true
    }
}

module.exports = {
  compile,
  writeToFile,
  generateDirSync
};
