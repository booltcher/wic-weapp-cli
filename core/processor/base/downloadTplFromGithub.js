const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const ora = require("ora");
const tip = require("../../../utils/tip");
const { appletRepoLink } = require("../../../config/repo.config");

const downloadTplFromGithub = async (appName) => {
  const spn = ora("Downloading: template files from github...");
  spn.start();

  try {
    await download(appletRepoLink, appName, {
      clone: true,
    });

    spn.stop();
    tip("success", "Done: generate base construction!");
  } catch (error) {
    spn.stop();
    tip("error", error);
  }
};

module.exports = downloadTplFromGithub;
