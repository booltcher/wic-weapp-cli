const fs = require("fs");
const path = require("path");
const { createDir, createFile, compileTpl, readJson, updateJson } = require("../helper");

const genPage = async (name, dest, tplName, data) => {
  const files = fs.readdirSync(
    path.resolve(__dirname, `../../lib/templates/${tplName}`)
  );

  files.map(async (file) => {
    const fileContent = await compileTpl(`../../lib/templates/${tplName}/${file}`, { ...data, name });
    const fileDirname = dest + "/" + name;
    createDir(fileDirname);
    const targetPath = path.resolve(
      fileDirname,
      `${name}.${file.split(".")[1]}`
    );
    createFile(targetPath, fileContent);
  });

  const oldPathList = readJson("app.json", "pages") || [];
  const newPathList = oldPathList.concat([`${dest}/${name}/${name}`]);
  updateJson("app.json", "pages", newPathList);
};

module.exports = genPage;
