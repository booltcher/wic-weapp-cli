const fs = require("fs");
const firstUpperCase = require("../../../lib/utils/firstUppercase");
const { Log, Spn } = require("../../../lib/utils/logger");
const genPage = require("../../generator/genPage");

const defaultPages = ["index", "user", "authorize"];

const initAppJson = async (appName, tabbarFlag, tabbarList) => {
  Spn.start("Initing: app.json...");

  try {
    const appJsonFilePath = `${appName}/app.json`;
    const appJsonFileBuffer = await fs.promises.readFile(appJsonFilePath);
    let appJsonFileContent = JSON.parse(appJsonFileBuffer);
    appJsonFileContent.window.navigationBarTitleText = appName;

    if (tabbarFlag) {
      const tabbarSet = Array.from(new Set(tabbarList));
      const tabbarConfig = {
        color: "#aaaaaa",
        selectedColor: "#313131",
        borderStyle: "white",
        list: [],
      };
      tabbarSet.map(async (tab) => {
        const tabFirstUpperCase = firstUpperCase(tab);
        tabbarConfig.list.push({
          iconPath: `static/images/icon-tab-index.jpg`,
          selectedIconPath: "static/images/icon-tab-index-active.jpg",
          pagePath: `pages/${tabFirstUpperCase}/${tab}`,
          text: tabFirstUpperCase,
        });
        if (!defaultPages.includes(tab)) {
          appJsonFileContent.pages.push(`pages/${tabFirstUpperCase}/${tab}`);
          await genPage(tab, `${appName}/pages`, false, false);
        }
      });
      appJsonFileContent.tabBar = tabbarConfig;
    }

    await fs.promises.writeFile(
      appJsonFilePath,
      JSON.stringify(appJsonFileContent, null, "\t")
    );

    Spn.stop();
    Log("success", "Done: init app.json!");
  } catch (error) {
    spn.stop();
    Log("error", error);
  }
};

module.exports = initAppJson;
