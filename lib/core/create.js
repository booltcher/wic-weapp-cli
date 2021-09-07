const fs = require("fs");
const program = require("commander");
const tip = require("../utils/tip");
const { createAppletProjectAction, createPageAction } = require("./actions");

const createCommand = () => {
  program
    .command("create <projectName>")
    .description("create a applet project")
    .action((name) => {
      if (fs.existsSync(name)) {
        tip("error", `Directory '${name}' has already existed!`);
        return;
      }
      if (process.argv.slice(3).length > 1) {
        tip("error", "Application name can not contain spaces！");
        return;
      }
      createAppletProjectAction(name);
    });

  program
    .command("page <pageName> [others...]")
    .description("create a page")
    .option(
      "-d, --dest <dest>",
      "specify a folder destination, example: -d /src/pages"
    )
    .action((name) => {
      createPageAction(name, program.dest || "pages");
    });
};

module.exports = createCommand;
