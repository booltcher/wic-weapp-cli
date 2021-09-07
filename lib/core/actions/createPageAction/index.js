const generateNewPage = require("../../generateNewPage");

// create new page
const createPageAction = async (name, dest) => {
  generateNewPage(dest, name)
};

module.exports = createPageAction;
