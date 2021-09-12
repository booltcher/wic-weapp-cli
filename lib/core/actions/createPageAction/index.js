const fs = require("fs");
const tip = require("../../../utils/tip");
const generateNewPage = require("../../generateNewPage");

// create new page
const createPageAction = async (name, options, dest) => {
  if (fs.existsSync(dest + "/" + name)) {
    tip("error", `Page:${name} has already exist!`);
    return;
  }

  const isList = options && options["list"];
  const isForm = options && options["form"];
  generateNewPage(name, dest, isList, isForm);
};

module.exports = createPageAction;
