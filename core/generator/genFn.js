const path = require("path");
const {
  createDir,
  createFile,
  compileTpl,
} = require("../helper");

// fixme: find a better way to distinguish call genPage out project or in project, by checking `projectName` currently
const genFn = async (name) => {
  try {
    const tplPath = path.resolve(
      __dirname,
      `../../lib/templates/${name}.js.ejs`
    );
    const fileContent = await compileTpl(tplPath, null);
    createDir('utils');
    createFile(`utils/${name}.js`, fileContent);
  } catch (error) {
    console.log(error);
  }
};

module.exports = genFn;
