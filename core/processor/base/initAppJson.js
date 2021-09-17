const { Log, Spn } = require("../../../lib/utils/logger");
const genPage = require("../../generator/genPage");
const { updateJson, pushJson} = require("../../helper");

const defaultPages = ["index", "user", "authorize"];

const initAppJson = async (appName, tabbarFlag, tabbarList) => {
  Spn.start("Initing: app.json...");

  try {
    updateJson(`${appName}/app.json`, `window.navigationBarTitleText`, appName);

    if (tabbarFlag) {
      const tabbarSet = Array.from(new Set(tabbarList));
      const tabbarConfig = {
        color: "#aaaaaa",
        selectedColor: "#313131",
        borderStyle: "white",
        list: [],
      };
      tabbarSet.map(async (tab) => {
        tabbarConfig.list.push({
          iconPath: `static/images/icon-tab-index.jpg`,
          selectedIconPath: "static/images/icon-tab-index-active.jpg",
          pagePath: `pages/${tab}/${tab}`,
          text: tab,
        });
        if (!defaultPages.includes(tab)) {
          pushJson(`${appName}/app.json`, `pages`, `pages/${tab}/${tab}`);
          await genPage(tab, `${appName}/pages`, 'page', null, appName);
        }
      });

      updateJson(`${appName}/app.json`, `tabBar`, tabbarConfig);
    }

    Spn.stop();
    Log("success", "Done: init app.json!");
  } catch (error) {
    Spn.stop();
    Log("error", error);
  }
};

module.exports = initAppJson;
