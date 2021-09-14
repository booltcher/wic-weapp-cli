const program = require("commander");
const printLogo = require("../lib/utils/printLogo");

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
    printLogo();
  });
};

module.exports = helpOptions;
