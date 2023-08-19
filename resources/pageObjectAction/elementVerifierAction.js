

const elementVerifierObject = require('../pageObjectModel/elementVerifierObject')



class elementVerifierAction {

    async checkForElement(locator){
        const targetPageElement = elementVerifierObject.pageElement(locator)
        await expect(targetPageElement).toExist()
    }


}

module.exports = new elementVerifierAction()