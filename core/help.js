const program = require("commander");
const printLogo = require("../lib/utils/printLogo");

const helpOptions = () => {
  program
    .option(
      "-d, --dest <dest>",
      "specify a folder destination, example: -d src/pages"
    )
    .option("-f, --form", "define a page as a form page")
    .option("-l, --list", "define a page as a list page")
    .option("-a, --add", "add from build-in")
    .option("-c, --create", "create new one")
    .option("-rn, --rename", "rename page")
    .option("-m, --move", "move page")
    .option("-r, --remove", "remove folder after updating");
  // .option("-v, --cover", "cover pervious files when adding")

  program.on("--help", function () {
    console.log("");
    printLogo();
  });
};

module.exports = helpOptions;
