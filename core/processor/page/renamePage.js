const fs = require("fs");
const { Log, Spn } = require("../../../lib/utils/logger");
const path = require("path");

const renamePage = (oldPath, newName) => {
    console.log(oldPath)
  if (!fs.readdirSync("pages").includes(oldPath)) {
    Log("error", `no such directory.`);
    return
  }
  if (fs.existsSync('pages' + '/' + newName)) {
    Log("error", `page ${newName} has already exist`);
    return
  }

  console.log(fs.readdirSync("pages"));
};

module.exports = renamePage;
