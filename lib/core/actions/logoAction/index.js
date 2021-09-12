const figlet = require("figlet")
const  logoAction = () => {
    //console.log(figlet.fontsSync());
    console.log('\r\n' + figlet.textSync(
        'Blcher',
        {
            font:'Bloody',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 60,
            whitespaceBreak: 'true',
        }
    ));
}

module.exports = logoAction