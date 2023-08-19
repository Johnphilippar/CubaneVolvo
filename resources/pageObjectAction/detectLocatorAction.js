const detectLocatorObject = require("../pageObjectModel/detectLocatorObject")
const utils = require('../../test/util/utils')


class detectLocator {
    
    async waitForElement(locator,text){
        
        const targetPageLocator = await detectLocatorObject.pageLocator(locator)

        await expect(targetPageLocator).toHaveId(text)

    }

    
    
}


module.exports = new detectLocator()