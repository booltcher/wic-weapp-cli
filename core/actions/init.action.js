const fs = require("fs");
const inquirer = require("inquirer");
const tip = require("../../../utils/tip");
const moduleProcessor = require("../../processor/modules")
const baseProcessor = require("../../processor/base");
const { genProjectPrompt } = require("./genProjectPrompt");

// create applet project
const initAction = async (project) => {
  if (fs.existsSync(name)) {
    tip("error", `Directory '${name}' has already existed!`);
    return;
  }
  if (process.argv.slice(3).length > 1) {
    tip("error", "Application name can not contain spaces！");
    return;
  }


  inquirer.prompt(genProjectPrompt(project)).then((res) => {
    const appName = res.Name;
    const tabbarFlag = res.Tabbar;
    const tabbarList = tabbarFlag ? res["Tabbar list"] : [];
    const moduleList = res.Modules;
    // const categorySidebarFlag = res["Category sidebar"];
    // const componentList = res.Components;

    if(tabbarFlag && !tabbarList.trim()){
      tip('error', 'Tabbar list is not a valid value.')
      return
    }
    
    baseProcessor(appName, tabbarFlag, tabbarList);
    
    moduleProcessor(moduleList);

    // componentProcessor(componentList);
  });
};

module.exports = initAction;
