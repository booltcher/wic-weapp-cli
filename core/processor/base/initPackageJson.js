const fs = require("fs");
const ora = require("ora");
const tip = require("../../../utils/tip");

const initPackageJson = async (appName) => {
  const spn = ora("Initing: package.json ...");
  spn.start();

  try {
    const pkgJsonFilePath = `${appName}/package.json`;
    const pkgJsonFileBuffer = await fs.promises.readFile(pkgJsonFilePath);
    let pkgJsonFileContent = JSON.parse(pkgJsonFileBuffer);
    pkgJsonFileContent.name = appName;
    await fs.promises.writeFile(
      pkgJsonFilePath,
      JSON.stringify(pkgJsonFileContent, null, "\t")
    );

    spn.stop();
    tip("success", "Done: init package.json!");
  } catch (error) {
    spn.stop();
    tip("error", error);
  }
};

module.exports = initPackageJson;
