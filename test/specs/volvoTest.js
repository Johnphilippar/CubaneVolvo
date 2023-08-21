


const buttonAction = require('../../resources/pageObjectAction/buttonAction')
const clickAction = require('../../resources/pageObjectAction/clickAction')
const clickObject = require('../../resources/pageObjectModel/clickObject')
const utils = require('../util/utils')
const waitForObject = require('../../resources/pageObjectModel/waitForObject')
const checkerElementObject = require('../../resources/pageObjectModel/checkerElementObject')
const expectObject = require('../../resources/pageObjectModel/expectElemName')
const scrollAction = require('../../resources/pageObjectAction/scrollAction')
const testing = require('./testing')
const inputAction = require('../../resources/pageObjectAction/inputAction')


describe('WebDriverIo Code Test' , () => {
    
        it('VolvoCubao Code Test' , async () => {

            try {
    
                browser.url(utils.defaultPage)
                browser.maximizeWindow()
                await waitForObject.getStarted.waitForDisplayed({ 'timeout': 5000 , 'timeoutMsg': 'Timeout message is working' })
                console.log('Get started wait displayed is working.')
                await expect(browser).toHaveUrl('https://webdriver.io/docs/gettingstarted/')
                console.log('Expect tohaveUrl is working.')
                await clickAction.actTopNotifClick()
                await browser.pause(utils.defaultDelay)
                await buttonAction.actDarkModeButton()
                await browser.pause(utils.defaultDelay)
                await clickAction.actCliManualClick()
                await expect(browser).toHaveUrl('https://webdriver.io/docs/gettingstarted/#install-cli-manually')
                console.log('Expect CLI URL is working.')
                await browser.pause(utils.defaultDelay)
                const cliChecker = await $(checkerElementObject.cliElemObject)
                await expect(cliChecker).toHaveId(expectObject.cliElemName)
                console.log('the expect is working in CLI ELEMENT')
                await browser.pause(utils.defaultDelay)
                await clickAction.actRunScriptClick()
                await clickObject.objRunScriptClick.waitForDisplayed({ 'timeout': 5000 , 'timeoutMsg': 'Timeout message is working' })
                await browser.pause(utils.defaultDelay)
                const systemReqChecker = await $(checkerElementObject.systemReqElemObject)
                await expect(systemReqChecker).toHaveId(expectObject.systemReqElemName)
                console.log('the expect is working SYSTEM REQ')
                await browser.pause(utils.defaultDelay)
                await scrollAction.actFooterScroll()
                await browser.pause(utils.defaultDelay)
                await clickAction.actGetStartedClick()
                await browser.pause(utils.defaultDelay)
                
                
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }  
   
        })

        it('WebdriverIO Toogle' , async () => {

            try {

            await browser.url('https://webdriver.io/docs/gettingstarted/')
            await browser.pause(utils.defaultDelay)
            await browser.setWindowSize(950, 1000)
            await browser.pause(utils.defaultDelay)
            await clickAction.actToggleNavBarClick()
            await browser.pause(utils.defaultDelay)
            await clickAction.actCoreConceptClick()
            await browser.pause(utils.defaultDelay)
            await clickAction.actCoreConceptClick()
            await browser.pause(utils.defaultDelay)
            await clickAction.actConfigurationClick()
            await browser.pause(utils.defaultDelay)
            await scrollAction.actConfigurationScroll()
            await browser.pause(utils.defaultDelay)
            await clickAction.actToggleNavBarClick()
            await browser.pause(utils.defaultDelay)
            await scrollAction.actCloseConfigurationScroll()
            await browser.pause(utils.defaultDelay)

            const toogleBar = await $$(utils.toogleBarObject)
            console.log('total length of navbar ' + toogleBar.length)

            for(let i=0;i<toogleBar.length;i++)
            {
                await toogleBar[i].click()
                await browser.pause(1500)

                if(await toogleBar[i].getText() != "Integration"){
                    continue;
                }

                const endToogle = await $(utils.integrationToogleUCS)


                if(endToogle != null)
                {
                    await endToogle.click()
                    await browser.pause(2000)
                    break
                }  

                await $(utils.uscTestingBotScroll).scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
            }
                
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
            }

        })

        it('Search' , async () => {

            try {
                
                await clickAction.actSearchClick()
                await browser.pause(utils.defaultDelay)
                await inputAction.actSearchInput()
                await browser.pause(utils.defaultDelay)
                await browser.keys("Enter")
                await browser.pause(utils.defaultDelay)
                await scrollAction.actScrollIntoViewScroll()
                await browser.pause(utils.defaultDelay)
                await clickAction.actToggleNavBarClick()
                await browser.pause(2000)
                await clickAction.actGetAttributeClick()
                await browser.pause(utils.defaultDelay)
                await clickAction.actToggleNavBarClick()
                await browser.pause(1000)
                await clickAction.actBackToMainMenuClick()
                await browser.pause(1000)
                await clickAction.actDocsClick()
                await browser.pause(1000)

            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
            }
        })

        it('WebdriverIO Navbar Loop' , async () => {

            try {
                await browser.url(utils.defaultPage)
                await browser.maximizeWindow()
                const allLength = await $$(utils.wdioNavBar)
                console.log('total length of navbar ' + allLength.length)
                await browser.pause(2000)

                
            for(let i=0;i<allLength.length;i++)
            {

                console.log('Navbar of webdriverIO Documentation' , await allLength[i].getText())
                await allLength[i].click()
                await browser.pause(1000)
                if(await allLength[i].getUrl() != "https://webdriver.io/docs/contribute"){
                    continue;
                }
                if(await allLength[i].getText() == "Contribute"){
                    await browser.pause(2000)
                    break
                }

                await browser.navigateTo('https://www.google.com')
                await browser.pause(2000)
                await $('[name="q"]').setValue('Thank you so much')
                await browser.pause(2000)
                await $('[name="btnK"]').click()
                await browser.pause(2000)
                await browser.close()
                
            }
                
            } catch (err) {
                
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
        })
        
    
    

})