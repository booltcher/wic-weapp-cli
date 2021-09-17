const createPage = require("../processor/page/createPage");
const renamePage = require("../processor/page/renamePage");
const movePage = require("../processor/page/movePage");
const deletePage = require("../processor/page/deletePage");

const pageAction = async (operation, name, subParams, options) => {
  switch (operation) {
    case "create":
      createPage(name, subParams, options);
      break;
    case "rename":
      renamePage(name, subParams, options);
      break;
    case "move":
      movePage(name, subParams, options);
      break;
    case "delete":
      deletePage(name, subParams, options);
      break;
    default:
      break;
  }
};

module.exports = pageAction;
