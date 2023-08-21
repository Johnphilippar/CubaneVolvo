
const loginPageObjectModel = require('../pageObjectModel/loginPageObject')


class loginPageObjectAction {


    async login(emailAddress,password){
        await loginPageObjectModel.emailInput.setValue(emailAddress)
        await loginPageObjectModel.emailNextButton.click()
        await loginPageObjectModel.passwordInput.setValue(password)
        await loginPageObjectModel.passwordNextButton.click()
        
    }




}

module.exports = new loginPageObjectAction()