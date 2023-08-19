
const buttonObject = require('../pageObjectModel/buttonObject')


class buttonAction {


    async actDarkModeButton(){
        buttonObject.objDarkModeButton.click()
    }

}


module.exports = new buttonAction()
