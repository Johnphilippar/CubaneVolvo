

class detectLocatorObjectModel {

    set pageLocatorModel(locator) {
        return $(locator)
    }

    get objGoogleImageLocatorModel(){
        return $('/html/body/div[1]/div[2]/div/img')
    }


    
}

module.exports = new detectLocatorObjectModel()