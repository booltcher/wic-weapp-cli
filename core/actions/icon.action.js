const fs = require("fs");
const { Log, Spn } = require("../../lib/utils/logger");
const AdmZip = require("adm-zip");
const path = require("path");

const globalSetting = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../config/user.config.json"))
);
const iconFilePath = globalSetting["icon-file-path"];
const iconFileName = globalSetting["icon-file-name"];

const getIconFileContentFromFolder = () => {
  const unknowFileName = fs.readdirSync(iconFilePath);
  const fileContent = fs.readFileSync(
    iconFilePath + "/" + unknowFileName + "/" + iconFileName
  );
  return fileContent;
};

const getIconFileContentFromZip = () => {
  const zip = new AdmZip(iconFilePath);
  const zipEnteries = zip.getEntries();
  const unknowFileName = zipEnteries[0].entryName.slice(0, -1);
  return zipEnteries
    .filter(
      (zipEntry) => zipEntry.entryName === unknowFileName + "/" + iconFileName
    )[0]
    .getData();
};

const removePreviousIconZip = () => {
  fs.unlinkSync(iconFilePath);
};

const removePreviousIconRecursive = () => {
  const files = fs.readdirSync(iconFilePath);
  files.forEach((file) => {
    let curPath = path.join(iconFilePath, file);
    if (fs.statSync(curPath).isDirectory()) {
      removePreviousIconRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(iconFilePath);
};

const updateIconAction = async (isRemoveAfterUpdate) => {
  Spn.start("Updating: icon font ...");

  try {
    const newIconFontFileContent = iconFilePath.includes(".zip")
      ? getIconFileContentFromZip()
      : getIconFileContentFromFolder();
    await fs.promises.writeFile(
      "components/base/oIcon/icon.wxss",
      newIconFontFileContent
    );

    if (isRemoveAfterUpdate) {
      iconFilePath.includes(".zip")
        ? removePreviousIconZip()
        : removePreviousIconRecursive();
    }

    Spn.stop();
    Log("success", "Update done!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = updateIconAction;
