

class elementVerifierObjectModel {

    set pageElementModel(locator){
        return $(locator)
    }

}


module.exports = new elementVerifierObjectModel()