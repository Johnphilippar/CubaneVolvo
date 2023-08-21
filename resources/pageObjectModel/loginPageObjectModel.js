

class loginPageObjectModel {


    get emailInputModel(){
        return $('//*[@id="identifierId"]')
    }

    get emailNextButtonModel(){
        return $('//*[@id="identifierNext"]/div/button')
    }
    
    get passwordInputModel(){
        return $('//*[@id="password"]/div[1]/div/div[1]/input')
    }

    get passwordNextButtonModel(){
        return $('//*[@id="passwordNext"]/div/button')
    }

}

module.exports = new loginPageObjectModel()