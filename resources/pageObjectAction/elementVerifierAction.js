

const elementVerifierObjectModel = require('../pageObjectModel/elementVerifierObject')



class elementVerifierAction {

    async checkForElement(locator){
        const targetPageElement = elementVerifierObjectModel.pageElement(locator)
        await expect(targetPageElement).toExist()
    }


}

module.exports = new elementVerifierAction()