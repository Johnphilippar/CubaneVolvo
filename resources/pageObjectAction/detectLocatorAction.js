const detectLocatorObject = require("../pageObjectModel/detectLocatorObject")
const utils = require('../../test/util/utils')


class detectLocator {
    
    async waitForElement(locator,text){
        
        const targetPageLocator = await detectLocatorObject.pageLocator(locator)

        await expect(targetPageLocator).toHaveId(text)

    }

    async actGoogleImageLocator(){
        
        await expect(detectLocatorObject).toHaveElementProperty('height',92)

    }

    
    
}


module.exports = new detectLocator()