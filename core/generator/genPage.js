const fs = require("fs");
const path = require("path");
const { createDir, createFile, compileTpl } = require("../helper");
const firstUpperCase = require("../../lib/utils/firstUppercase");

const genPage = async (name, dest, tplName, isList, isForm) => {
  const files = fs.readdirSync(path.resolve(__dirname, `../../lib/templates/${tplName}`));

  files.map(async (file) => {
    const fileContent = await compileTpl(file, { name, isList, isForm });
    const fileDirname = dest + "/" + firstUpperCase(name);
    createDir(fileDirname);
    const targetPath = path.resolve(
      fileDirname,
      `${name}.${file.split(".")[1]}`
    );
    createFile(targetPath, fileContent);
  });
};

module.exports = genPage;
