const generateModule = require("../../generateModule")
const moduleProcessor = (moduleList) => {
    moduleList.map( mod => {
        generateModule(mod)
    })
}

module.exports = moduleProcessor