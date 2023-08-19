const detectLocatorAction = require('../../resources/pageObjectAction/detectLocatorAction')
const { locateElement } = require("../helper/helper")
const utils = require("../util/utils")


describe('Testing 1' , () => {

    it('Merge testing' , async () => {

            try {

                browser.url('https://webdriver.io/docs/gettingstarted/')
                await browser.pause(3000)

                // await browser.newWindow('https://www.google.com')
                // const googleLocator = await $('//*[@class="lnXdpd"]')
                // await expect(googleLocator).toHaveElementProperty('height',92)
                // await detectLocatorAction.actGoogleImageLocator()
                // console.log('EXPECT IS WORKING')
                // await browser.url('https://www.youtube.com')
                // await browser.pause(3000)

            } catch (err) {
                console.error(err)
            }

    })

})