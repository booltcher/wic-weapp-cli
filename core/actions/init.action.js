const fs = require("fs");
const inquirer = require("inquirer");
const { Log } = require("../../lib/utils/logger");
const moduleProcessor = require("../processor/module")
const baseProcessor = require("../processor/base");
const { genInitPrompt } = require("../generator/genPrompt");

// create applet project
const initAction = async (projectName) => {
  if (fs.existsSync(projectName)) {
    Log("error", `Directory '${projectName}' has already existed!`);
    return;
  }
  if (process.argv.slice(3).length > 1) {
    Log("error", "Application name can not contain spaces！");
    return;
  }

  inquirer.prompt(genInitPrompt(projectName)).then((res) => {
    const appName = res.Name;
    const tabbarFlag = res.Tabbar;
    const tabbarList = tabbarFlag ? res["Tabbar list"] : [];
    const moduleList = res.Modules;
    // const categorySidebarFlag = res["Category sidebar"];
    // const componentList = res.Components;

    if(tabbarFlag && !tabbarList.trim()){
      Log('error', 'Tabbar list is not a valid value.')
      return
    }
    
    baseProcessor(appName, tabbarFlag, tabbarList);
    
    // moduleProcessor(moduleList);

    // componentProcessor(componentList);

    Log('info', `use: cd ${projectName}`)
  });
};

module.exports = initAction;
