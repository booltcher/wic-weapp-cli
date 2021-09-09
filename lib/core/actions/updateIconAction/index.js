const fs = require("fs");
const tip = require("../../../utils/tip");
const ora = require("ora");
const {
  iconFileDest,
  iconFilePath,
  iconFileName,
} = require("../../../config/icon.config");

const maxValName = (names) =>{
  const map = names.map((dest) => Number(dest.split("(")[1].split(")")[0]))
  return Math.max(...map);
}

const getRealWrapperFolderName = (zip) => {
  const destList = fs
    .readdirSync(iconFilePath)
    .filter((dest) => dest.includes(iconFileDest));
  const destZipList = destList.filter((dest) => dest.includes(".zip"));
  const destNotZipList = destList.filter((dest) => !dest.includes(".zip"));

  if (zip) {
    if (destZipList.length === 1) {
      return destZipList[0];
    }
    return `${iconFilePath}/${iconFileDest} (${maxValName(
      destZipList.filter((d) => d.includes("("))
    )}).zip`;
  }
  if (destNotZipList.length === 1) {
    return destNotZipList[0];
  }
  return `${iconFilePath}/${iconFileDest} (${maxValName(
    destNotZipList.filter((d) => d.includes("("))
  )})`;
};

const getIconFileContent = (zip) => {
  const wrapperName = getRealWrapperFolderName(zip)
  if(zip){
    console.log('zip one')
  }
  const folderName = fs.readdirSync(`${wrapperName}`)[0];
  return fs.readFileSync(`${wrapperName}/${folderName}/${iconFileName}`);
};

// const getIconFontFileContentFromZip = () => {};

const updateIconAction = async (zip) => {
  const spn = ora("Updating: icon font ...");
  spn.start();

  try {
    const newIconFontFileContent = getIconFileContent(zip);
    await fs.promises.writeFile(
      "components/base/oIcon/icon.wxss",
      newIconFontFileContent
    );

    spn.stop();
    tip("success", "Update done!");
  } catch (error) {
    spn.stop();
    tip("error", error);
  }
};

module.exports = updateIconAction;
