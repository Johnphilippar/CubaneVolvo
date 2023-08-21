
const buttonObjectModel = require('../pageObjectModel/buttonObjectModel')


class buttonAction {


    async actDarkModeButton(){
        buttonObjectModel.objDarkModeButtonModel.click()
    }

}


module.exports = new buttonAction()
