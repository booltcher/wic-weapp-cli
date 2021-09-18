const { Log } = require("../../../lib/utils/logger");
const genFn = require("../../generator/genFn");

const addUtil = async (name) => {
  try {
    await genFn(name);
    Log("success", `Done: add util function: ${name}`);
  } catch (error) {
    Log("error", error);
  }
};

module.exports = addUtil;
