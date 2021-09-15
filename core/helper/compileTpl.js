
const path = require("path");
const ejs = require("ejs");

// tplPostion => file content
const compileTpl = (tplPostion, data) => {
  const tplPath = path.resolve(__dirname, tplPostion);
  return new Promise((resolve) => {
    ejs.renderFile(tplPath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err)
        return;
      }
      resolve(res);
    });
  });
};

module.exports = compileTpl;
