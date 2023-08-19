
const loginPageObject = require('../pageObjectModel/loginPageObject')


class loginPageObjectAction {


    async login(emailAddress,password){
        await loginPageObject.emailInput.setValue(emailAddress)
        await loginPageObject.emailNextButton.click()
        await loginPageObject.passwordInput.setValue(password)
        await loginPageObject.passwordNextButton.click()
        
    }




}

module.exports = new loginPageObjectAction()