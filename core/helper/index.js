const createDir = require("./createDir");
const createFile = require("./createFile");
const modifyFile = require("./modifyFile");
const readFile = require("./readFile");
const compileTpl = require("./compileTpl");
const { readJson, pushJson, updateJson } = require("./handleJson")

module.exports = {
    createDir,
    createFile,
    modifyFile,
    readFile,
    compileTpl,
    readJson,
    pushJson,
    updateJson
};
