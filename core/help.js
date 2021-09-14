const program = require("commander");
const logoAction = require("./actions/logoAction");

const helpOptions = () => {
  program
    .option(
      "-d, --dest <dest>",
      "specify a folder destination, example: -d /src/pages"
    )
    .option("-f, --form", "define a page as a form page")
    .option("-l, --list", "define a page as a list page")
    .option("-r, --remove", "remove folder after updating")
    .option("-r, --remove", "remove folder after updating")
    .option("-r, --remove", "remove folder after updating");

  program.on("--help", function () {
    console.log("");
    logoAction();
  });
};

module.exports = helpOptions;
