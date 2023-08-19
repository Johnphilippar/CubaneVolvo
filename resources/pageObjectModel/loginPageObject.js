

class loginPageObject {


    get emailInput(){
        return $('//*[@id="identifierId"]')
    }

    get emailNextButton(){
        return $('//*[@id="identifierNext"]/div/button')
    }
    
    get passwordInput(){
        return $('//*[@id="password"]/div[1]/div/div[1]/input')
    }

    get passwordNextButton(){
        return $('//*[@id="passwordNext"]/div/button')
    }

}

module.exports = new loginPageObject()