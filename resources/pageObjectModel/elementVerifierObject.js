

class elementVerifierObject {

    set pageElement(locator){
        return $(locator)
    }

}


module.exports = new elementVerifierObject()