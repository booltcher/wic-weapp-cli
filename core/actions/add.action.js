const { Log } = require("../../lib/utils/logger");
const {
  utilKitsList,
  componentKitsList,
  moduleKitsList,
} = require("../config/kits.config");

const addModule = require("../processor/module/addModule");
const addUtil = require("../processor/util/addUtil");
const addComponent = require("../processor/component/addComponent");

const addAction = (name) => {
  if (utilKitsList.includes(name)) {
    addUtil(name);
    return;
  }

  if (componentKitsList.includes(name)) {
    addComponent(name);
    return;
  }

  if (moduleKitsList.includes(name)) {
    addModule(name);
    return;
  }

  Log(
    "error",
    "no such kit in wic, refers to: https://github.com/blcher/wic-weapp-cli#readme"
  );
};
module.exports = addAction;
