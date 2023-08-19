

class detectLocatorObject {

    set pageLocator(locator) {
        return $(locator)
    }

    get objGoogleImageLocator(){
        return $('/html/body/div[1]/div[2]/div/img')
    }


    
}

module.exports = new detectLocatorObject()