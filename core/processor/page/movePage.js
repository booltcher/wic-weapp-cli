const fs = require("fs");
const { Log } = require("../../../lib/utils/logger");
const { readJson, updateJson } = require("../../helper");

const movePage = (currentPath, targetPath) => {
  const pathArr = currentPath.split("/");
  const pageName = pathArr[pathArr.length - 1];

  if (!fs.existsSync(currentPath)) {
    Log("error", `no such directory: ${currentPath}.`);
    return;
  }
  if (fs.existsSync(targetPath)) {
    Log("error", `page ${targetPath} has already exist`);
    return;
  }

  fs.renameSync(currentPath, targetPath);

  const oldPathList = readJson("app.json", "pages") || [];
  const newPathList = oldPathList.forEach((v) => {
    if (v === `${currentPath}/${pageName}`) {
      v = `${targetPath}/${pageName}`;
    }
  });
  updateJson("app.json", "pages", newPathList);

  Log("success", `page ${currentPath} has been moved to ${targetPath}`);
};

module.exports = movePage;
