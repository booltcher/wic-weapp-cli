const fs = require("fs");
const { Spn } = require("../../lib/utils/logger");
const genPage = require("../generator/genPage");

// create new page
const pageAction = async (name, options, dest) => {
  if (fs.existsSync(dest + "/" + name)) {
    Spn("error", `Page:${name} has already exist!`);
    return;
  }

  const isList = options && options["list"];
  const isForm = options && options["form"];
  genPage(name, dest, isList, isForm);
};

module.exports = pageAction;
