const program = require("commander");
const {
  initAction,
  pageAction,
  iconAction,
  configAction,
} = require("./actions");

const createCommand = () => {
  program
    .command("init <projectName>")
    .description("create a weapp project")
    .action((name) => initAction(name));

  program
    .command("create-page <pageName> [options]")
    .description("manage page")
    .action((name) => pageAction("create", name, null, program.opts()));

  program
    .command("rename-page <page-destination> <new name>")
    .description("rename page")
    .action((oldPath, newName) => pageAction("rename", oldPath, newName, null));

  program
    .command("move-page <pageName> <targetDir>")
    .description("move page")
    .action((name, targetDir) =>
      pageAction("move", name, targetDir, program.opts())
    );

  program
    .command("config [configKey] [configValue]")
    .description("set config")
    .action((key, value) => configAction(key, value));

  program
    .command("update-icon")
    .description("update icon font by specific file.")
    .action(() => iconAction(program.opts().remove));
};

module.exports = createCommand;
