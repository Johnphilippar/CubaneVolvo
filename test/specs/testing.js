const detectLocatorAction = require('../../resources/pageObjectAction/detectLocatorAction')
const { locateElement } = require("../helper/helper")
const utils = require("../util/utils")


describe('Testing 1' , () => {

    it('Merge testing' , async () => {

            try {

                browser.url('https://www.youtube.com')
                await browser.pause(3000)
                await detectLocatorAction.waitForElement('#search-icon-legacy','search-icon-legacy')
                await browser.pause(3000)
                await console.log('EXPECT IS WORKING')
                

            } catch (err) {
                console.error(err)
            }

    })

})