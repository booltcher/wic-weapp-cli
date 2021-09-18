const program = require("commander");
const {
  initAction,
  pageAction,
  iconAction,
  configAction,
  addAction
} = require("./actions");

const createCommand = () => {
  // init
  program
    .command("init <projectName>")
    .description("create a weapp project")
    .action((name) => initAction(name));

  // page
  program
    .command("create-page <pageName> [options]")
    .description("manage page")
    .action((name) => pageAction("create", name, null, program.opts()));

  program
    .command("rename-page <page-destination> <new name>")
    .description("rename page")
    .action((oldPath, newName) => pageAction("rename", oldPath, newName, null));

  program
    .command("move-page <current-destination> <target-destination>")
    .description("move page")
    .action((currentPath, targetPath) =>
      pageAction("move", currentPath, targetPath, program.opts())
    );

  program
    .command("delete-page <page-destination>")
    .description("remove page")
    .action((currentPath) =>
      pageAction("delete", currentPath, null, program.opts())
    );

  // add [module, com, util]
  program
    .command("add <module/component/util name>")
    .description("add built-in kits")
    .action((name) =>
      addAction(name, program.opts())
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
