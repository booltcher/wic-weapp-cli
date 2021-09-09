const program = require("commander");

const helpOptions = () => {
  program
    .option(
      "-d, --dest <dest>",
      "specify a folder destination, example: -d /src/pages"
    )
    .option(
      "-z, --zip",
      "specify a target file if in a zip"
    );

  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("  other options~");
  });
};

module.exports = helpOptions;
