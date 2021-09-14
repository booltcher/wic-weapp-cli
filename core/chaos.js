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
    .description("create a applet project")
    .action((name) => initAction(name));

  program
    .command("page <options> <pageName>")
    .description("create a page")
    .action((name) =>
      pageAction(name, program.opts(), program.dest || "pages")
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
