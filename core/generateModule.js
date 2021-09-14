const { notStrictEqual } = require("assert");
const fs = require("fs");
const path = require("path");
const { compile, writeToFile, generateDirSync } = require("../lib/utils/ejsHandle");
const firstUpperCase = require("../lib/utils/firstUppercase");
const tip = require("../lib/helper/tip");

const BuildInModulesMap = require("./__const__/BuildModulesMap");

const generateModule = async (mod) => {
  const moduleTplInfo = BuildInModulesMap[mod]
  if (!moduleTplInfo ) {
    tip("error", "Module does not exist.");
    return;
  }
  
  convert(moduleTplInfo.dir, mod.toLowerCase, "pages")

};

module.exports = generateModule;
