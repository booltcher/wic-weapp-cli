const fs = require("fs");
const { Log } = require("../../../lib/utils/logger");
const { removeDir, readJson, updateJson } = require("../../helper");

const deletePage = async (path) => {
  if (!fs.existsSync(path)) {
    Log("error", `no such page: ${path}`);
    return;
  }

  const pathArr = path.split("/");
  const pageName = pathArr[pathArr.length - 1];

  removeDir(path);

  const oldPathList = readJson("app.json", "pages");

  updateJson(
    "app.json",
    "pages",
    oldPathList.filter((v) => v !== path + "/" + pageName)
  );

  Log("success", `deleted ${path} page`);
};

module.exports = deletePage;
