
const fs = require("fs");
const createFile = (path, content) => {
    return fs.promises.writeFile(path, content)
}

module.exports = createFile