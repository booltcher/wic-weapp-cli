const fs = require("fs");
const path = require("path");
const {
  compile,
  writeToFile,
  generateDirSync,
} = require("../utils/ejsHandle");
const firstUpperCase = require("../utils/firstUppercase");

const generateNewPage = async (dest, name) => {
  const pageFiles = fs.readdirSync(
    path.resolve(__dirname, "../templates/page")
  );
  pageFiles.map(async (file) => {
    const fileContent = await compile(file, { name });
    const fileDirname = dest + "/" + firstUpperCase(name);
    if (generateDirSync(fileDirname)) {
      const targetPath = path.resolve(
        fileDirname,
        `${name}.${file.split(".")[1]}`
      );
      writeToFile(targetPath, fileContent);
    }
  });
};

module.exports = generateNewPage
