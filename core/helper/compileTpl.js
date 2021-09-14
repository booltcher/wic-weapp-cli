
const path = require("path");
const ejs = require("ejs");

// tplName => file content
const compileTpl = (tplName, data) => {
  const tplPostion = `../../lib/templates/${tplName}`;
  const tplPath = path.resolve(__dirname, tplPostion);

  return new Promise((resolve) => {
    ejs.renderFile(tplPath, { data }, {}, (err, res) => {
      if (err) {
        return;
      }
      resolve(res);
    });
  });
};

module.exports = compileTpl;
