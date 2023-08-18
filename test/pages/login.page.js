


class LoginPage {


    get emailTextBox(){
        return $('//*[@id="identifierId"]')
    }

    get nextButtonEmail(){
        return $('//*[@id="identifierNext"]/div/button')
    }
    
    get passwordTextBox(){
        return $('//*[@id="password"]/div[1]/div/div[1]/input')
    }

    get nextButtonPassword(){
        return $('//*[@id="passwordNext"]/div/button')
    }

    get loginMessage(){
        return $('//*[@id="items"]')
    }

    async login(emailAddress,password){
        await this.emailTextBox.setValue(emailAddress)
        await this.nextButtonEmail.click()
        await this.passwordTextBox.setValue(password)
        await this.nextButtonPassword.click()
    }

    async checkMessage(){
        await expect(this.loginMessage).toExist()
    }

}

module.exports = new LoginPage()
