// receive 3 params
// 1. tpl path
// 2. tpl name
// 3. target path

const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
// const { promisify } = require("util");
// const renderFilePromise = promisify(ejs.renderFile)

const convert = (templateName, data) => {
  const prefixName = templateName.split(".")[0];
  const tplPostion = ["component", "page"].includes(prefixName)
    ? `../templates/${prefixName}/${templateName}`
    : `../templates/${templateName}`;
  const tplPath = path.resolve(__dirname, tplPostion);

  return new Promise((resolve) => {
    ejs.renderFile(tplPath, { data }, {}, (err, res) => {
      if (err) {
        return;
      }
      resolve(res);
    });
  });
};


module.exports = convert;
