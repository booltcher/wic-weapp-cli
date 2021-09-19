const fs = require("fs");
const { Log } = require("../../../lib/utils/logger");
const genPage = require("../../generator/genPage");

const createPage = async (name, subParams, options) => {
  const targetDir = options.dest || "pages";
  if (fs.existsSync(targetDir + '/' + name)) {
    Log("error", `page ${name} has already exist`);
    return
  }

  await genPage(name, targetDir, "page", {
    isList: !!options.list,
    isForm: options.form,
  });
  Log("success", `create new ${name} page`);
};

module.exports = createPage;
