const fs = require("fs");
const { Log, Spn } = require("../../../lib/utils/logger");

const initPackageJson = async (appName) => {
  Spn.start("Initing: package.json ...");

  try {
    const pkgJsonFilePath = `${appName}/package.json`;
    const pkgJsonFileBuffer = await fs.promises.readFile(pkgJsonFilePath);
    let pkgJsonFileContent = JSON.parse(pkgJsonFileBuffer);
    pkgJsonFileContent.name = appName;
    await fs.promises.writeFile(
      pkgJsonFilePath,
      JSON.stringify(pkgJsonFileContent, null, "\t")
    );

    Spn.stop();
    Log("success", "Done: init package.json!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = initPackageJson;
