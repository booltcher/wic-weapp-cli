const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const { Log, Spn } = require("../../../lib/utils/logger");
const { repoLink } = require("../../config/repo.config");

const downloadTplFromGithub = async (appName) => {
  Spn.start("Downloading: template files from github...");

  try {
    await download(repoLink, appName, {
      clone: true,
    });

    Spn.stop();
    Log("success", "Done: generate base construction!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = downloadTplFromGithub;
