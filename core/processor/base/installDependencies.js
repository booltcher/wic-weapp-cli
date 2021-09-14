const ora = require("ora");
const tip = require("../../../utils/tip");
const { commandSpawn } = require("../../../utils/terminal");

const installDependencies = async (appName) => {
  const spn = ora("Installing: dependencies...");
  spn.start();

  try {
    const commandForOS = process.platform === "win32" ? "npm.cmd" : "npm";
    await commandSpawn(commandForOS, ["install"], {
      cwd: `./${appName}`,
    });

    spn.stop();
    tip("success", "Done: install dependencies!");
  } catch (error) {
    spn.stop();
    tip("error", error);
  }
};

module.exports = installDependencies;
