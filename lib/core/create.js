const fs = require("fs");
const program = require("commander");
const tip = require("../utils/tip");
const {
  createProjectAction,
  createPageAction,
  updateIconAction
} = require("./actions");
const globalConfigAction = require("./actions/globalConfigAction");

const createCommand = () => {
  program
    .command("init <projectName>")
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
      createProjectAction(name);
    });

  program
    .command("create-page <pageName> [options]")
    .description("create a page")
    .action((name) => {
      createPageAction(name, program.opts(), program.dest || "pages");
    });

  program
    .command("config [configKey] [configValue]")
    .description("set config")
    .action((key, value) => {
      globalConfigAction(key, value);
    });

  program
    .command("update-icon")
    .description("update icon font by specific file.")
    .action(() => {
      updateIconAction(program.opts().remove);
    });

};

module.exports = createCommand;
