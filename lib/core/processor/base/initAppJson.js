const fs = require("fs");
const ora = require("ora");
const firstUpperCase = require("../../../utils/firstUppercase");
const tip = require("../../../utils/tip");
const generateNewPage = require("../../generateNewPage");

const defaultPages = ["index", "user", "authorize"];

const initAppJson = async (appName, tabbarFlag, tabbarList) => {
  const spn = ora("Initing: app.json...");
  spn.start();

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
        // fixme already existed pages config in pages.json
        appJsonFileContent.pages.push(`pages/${tabFirstUpperCase}/${tab}`);
        if (!defaultPages.includes(tab)) {
          await generateNewPage(`${appName}/pages`, tab)
        }
      });
      appJsonFileContent.tabBar = tabbarConfig
    }

    await fs.promises.writeFile(
      appJsonFilePath,
      JSON.stringify(appJsonFileContent, null, "\t")
    );

    spn.stop();
    tip("success", "Done: init app.json!");
  } catch (error) {
    spn.stop();
    tip("error", error);
  }
};

module.exports = initAppJson;
