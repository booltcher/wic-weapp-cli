const fs = require("fs");
const path = require("path");
const {
  createDir,
  createFile,
  compileTpl,
  readJson,
  updateJson,
} = require("../helper");

// fixme: find a better way to distinguish call genPage out project or in project, by checking `projectName` currently
const genPage = async (name, dest, tplName, data, projectName) => {
  try {
    const files = fs.readdirSync(
      path.resolve(__dirname, `../../lib/templates/${tplName}`)
    );

    files.map(async (file) => {
      const fileContent = await compileTpl(
        `../../lib/templates/${tplName}/${file}`,
        { ...data, name }
      );
      const fileDirname = dest + "/" + name;
      createDir(fileDirname);
      const targetPath = path.resolve(
        fileDirname,
        `${name}.${file.split(".")[1]}`
      );
      createFile(targetPath, fileContent);
    });
    const appJsonPath = projectName ? `${projectName}/app.json` : "app.json";

    const oldPathList = readJson(appJsonPath, "pages") || [];
    const newPathList = oldPathList.concat([`${dest}/${name}/${name}`]);
    updateJson(appJsonPath, "pages", newPathList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = genPage;
