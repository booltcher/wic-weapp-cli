const program = require("commander");

const helpOptions = () => {
  program
    .option(
      "-d, --dest <dest>",
      "specify a folder destination, example: -d /src/pages"
    )
    .option("-r, --remove", "remove folder after updating");

  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("  other options~");
  });
};

module.exports = helpOptions;
