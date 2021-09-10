const inquirer = require("inquirer");
const { genProjectPrompt } = require("./genProjectPrompt");
const baseProcessor = require("../../processor/base");
const tip = require("../../../utils/tip");

// create applet project
const createProjectAction = async (project) => {
  inquirer.prompt(genProjectPrompt(project)).then((res) => {
    const appName = res.Name;
    const tabbarFlag = res.Tabbar;
    const tabbarList = tabbarFlag ? res["Tabbar list"] : [];
    const moduleList = res.Modules;
    const categorySidebarFlag = res["Category sidebar"];
    const componentList = res.Components;

    if(tabbarFlag && !tabbarList.trim()){
      tip('error', 'Tabbar list is not a valid value.')
      return
    }
    
    baseProcessor(appName, tabbarFlag, tabbarList);

    // moduleProcessor(moduleList);

    // componentProcessor(componentList);
  });
};

module.exports = createProjectAction;
