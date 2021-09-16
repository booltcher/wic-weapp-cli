const fs = require("fs");
const { Log } = require("../../../lib/utils/logger");
const { readJson, updateJson } = require("../../helper");

const renamePage = (oldPath, newName) => {
  const parentArr = oldPath.split("/");
  parentArr.pop();
  const parentPath = parentArr.join("/");
  const oldPathArr = oldPath.split("/");
  const oldPageName = oldPathArr[oldPathArr.length - 1];
  const newPath = parentPath + "/" + newName;

  if (!fs.existsSync(oldPath)) {
    Log("error", `no such directory.`);
    return;
  }
  if (fs.existsSync(newPath)) {
    Log("error", `page ${newName} has already exist`);
    return;
  }

  fs.renameSync(oldPath, newPath);

  const toUpdatedfiles = fs.readdirSync(newPath);

  toUpdatedfiles
    .filter((file) => file.includes("."))
    .map((file) => {
      const fileSuffix = file.split(".")[1];
      fs.renameSync(
        `${newPath}/${file}`,
        `${newPath}/${newName}.${fileSuffix}`
      );
    });

  const oldPathList = readJson("app.json", "pages") || [];
  const newPathList = oldPathList
    .filter((v) => v !== `${oldPath}/${oldPageName}`)
    .concat([`${newPath}/${newName}`]);
  updateJson("app.json", "pages", newPathList);

  Log("success", `page ${oldPath} has been renamed to ${newName}`);
};

module.exports = renamePage;
