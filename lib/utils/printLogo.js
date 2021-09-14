const figlet = require("figlet");
const printLogo = () => {
  console.log(
    "\r\n" +
      figlet.textSync("Blcher", {
        font: "Bloody",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 60,
        whitespaceBreak: "true",
      })
  );
};

module.exports = printLogo;
