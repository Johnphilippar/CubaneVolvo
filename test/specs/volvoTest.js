


const buttonAction = require('../../resources/pageObjectAction/buttonAction')
const clickAction = require('../../resources/pageObjectAction/clickAction')
const clickObject = require('../../resources/pageObjectModel/clickObject')
const utils = require('../util/utils')
const waitForObject = require('../../resources/pageObjectModel/waitForObject')
const checkerElementObject = require('../../resources/pageObjectModel/checkerElementObject')
const expectObject = require('../../resources/pageObjectModel/expectElemName')
const scrollAction = require('../../resources/pageObjectAction/scrollAction')
const testing = require('./testing')


describe('WebDriverIo Code Test' , () => {
    
        it('VolvoCubao Code Test' , async () => {

            try {
    
                browser.url(utils.defaultPage)
                browser.maximizeWindow()
                await waitForObject.getStarted.waitForDisplayed({ 'timeout': 5000 , 'timeoutMsg': 'Timeout message is working' })
                console.log('Get started wait displayed is working.')
                await clickAction.actTopNotifClick()
                await browser.pause(3000)
                await buttonAction.actDarkModeButton()
                await browser.pause(utils.defaultDelay)
                await clickAction.actCliManualClick()
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


    
            // EXPLORE SOME DOCUMENTS ON THE LEFT SIDE.
    
    
            // try {
    
            //     const languageDropdown = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[1]')
            //     await languageDropdown.click()
            //     await browser.pause(2000)
    
            //     const coreConceptsClick = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[2]/div/a')
            //     await coreConceptsClick.click()
            //     await browser.pause(2000)
    
            //     const whyWebDriverIoClick = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[1]/ul/li[1]/a')
            //     await whyWebDriverIoClick.click()
            //     await browser.pause(2000)
    
            //     const baseOnWebStandards = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/ul[2]/li[1]')
            //     await baseOnWebStandards.scrollIntoView({ behavior: "smooth"})
            //     await browser.pause(2000)
                
            //     const trueOpenSource = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[2]/a')
            //     await trueOpenSource.click()
            //     await browser.pause(2000)
    
            //     const guidesDropdown = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[4]/div/a')
            //     await guidesDropdown.click()
            //     await browser.pause(2000)
    
            //     const selectorGuides = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[4]/ul/li[1]/a')
            //     await selectorGuides.click()
            //     await browser.pause(2000)
    
            //     const xpathScroll = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/div[16]')
            //     await xpathScroll.scrollIntoView({ behavior: "smooth"})
            //     await browser.pause(2000)
    
            // } catch (err) {
                
            //     await browser.navigateTo('https://www.volvo.com')
            //     console.error('Encounter an error ' +err)
            //     await browser.closeWindow()
                
            // }
    
    
            // // BLOG
    
            // try {
            //     const gettingStarted = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[1]/a')
            //     await gettingStarted.click()
            //     await browser.pause(2000)
            //     await browser.newWindow('https://webdriver.io/blog')
            //     await browser.pause(2000)
            //     const typescriptSupport = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/aside/nav/ul/li[2]/a')
            //     await typescriptSupport.click()
            //     await browser.pause(2000)
            //     const typescriptScrollDown = await $('/html/body/div/div[2]/div/div/main/article/div/p[10]')
            //     await typescriptScrollDown.scrollIntoView({ behavior: "smooth"})
            //     await browser.pause(2000)
            //     const nextPage = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/main/nav/a[2]')
            //     await nextPage.click()
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[3]/a').click()
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[4]/a').click()
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[6]/ul/li[1]/a').click()
            //     await browser.pause(2000)
            // } catch (err) {
            //     await browser.navigateTo('https://www.volvo.com')
            //     console.error('Encounter an error ' +err)
            //     await browser.closeWindow()
                
            // }
    
            // // CONTRIBUTE
    
            // try {
                
            //     await browser.newWindow('https://webdriver.io/docs/contribute')
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[5]').scrollIntoView({behavior: "smooth"})
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[19]').scrollIntoView({behavior: "smooth"})
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[6]/a').click()
            //     await browser.pause(2000)
            //     await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[1]/a').click()
            //     await browser.pause(2000)
            // } catch (err) {
            //     await browser.navigateTo('https://www.volvo.com')
            //     console.error('Encounter an error ' +err)
            //     await browser.closeWindow()
                
            // }
    
            // try {
            //     await browser.switchWindow('https://webdriver.io/docs/gettingstarted')
            //     await browser.maximizeWindow()
            //     await browser.pause(2000)
            //     const allLength = await $$('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a')
            //     console.log('total length of navbar ' + allLength.length)
            //     await browser.pause(2000)
    
            //     for(let i=0;i<allLength.length;i++)
            //     {
            //         console.log('Navbar of webdriverIO Documentation' , await allLength[i].getText())
            //         await allLength[i].click()
            //         // await browser.pause(2000)
            //         if(await allLength[i].getText() === "Sponsor"){
            //             await browser.pause(2000)
            //             await browser.navigateTo('https://www.google.com')
            //             await browser.pause(5000)
            //             await $('[name="q"]').setValue('Thank you so much')
            //             await browser.pause(5000)
            //             await $('[name="btnK"]').click()
            //             await browser.pause(5000)
            //             await browser.closeWindow()
            //         }    
            //     }
                
            // } catch (err) {
                
            //     await browser.navigateTo('https://www.volvo.com')
            //     console.error('Encounter an error ' +err)
            //     await browser.closeWindow()
                
            // }
   
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
            await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[2]/div/a').click()
            await browser.pause(utils.defaultDelay)
            await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[3]/div/a').click()
            await browser.pause(utils.defaultDelay)
            await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/p[17]').scrollIntoView({behavior: "smooth"})
            await browser.pause(utils.defaultDelay)
            await $('/html/body/div/nav/div[1]/div[1]/button').click()
            await browser.pause(utils.defaultDelay)
            await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[3]/div/button').click()
            await browser.pause(utils.defaultDelay)

            const toogleBar = await $$('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li/div/a [@href="#"]')
            console.log('total length of navbar ' + toogleBar.length)

            for(let i=0;i<toogleBar.length;i++)
            {
                await toogleBar[i].click()
                await browser.pause(1500)

                if(await toogleBar[i].getText() != "Integration"){
                    continue;
                }

                const endToogle = await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[10]/ul/li[1]/a')


                if(endToogle != null)
                {
                    await endToogle.click()
                    await browser.pause(5000)
                    break
                }  

                await $('//*[@id="testingbot"]/a').scrollIntoView({ behavior: "smooth"})
                await browser.pause(3000)
            }
                
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
            }

        })

        it('Search' , async () => {

            try {
                
                await $('//*[@aria-label="Search"]').click()
                await browser.pause(2000)
                await $('//*[@id="docsearch-input"]').setValue('scrollintoview')
                await browser.pause(2000)
                await browser.keys("Enter")
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/div[1]/div').scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
                await clickAction.actToggleNavBarClick()
                await browser.pause(2000)
                await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[4]/ul/li[10]/a').click()
                await browser.pause(2000)
                await clickAction.actToggleNavBarClick()
                await browser.pause(2000)
                await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/button').click()
                await browser.pause(2000)
                await $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[1]/ul/li[1]/a').click()
                await browser.pause(5000)
                
                
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
                const allLength = await $$('//*[@class="navbar__item navbar__link"]')
                console.log('total length of navbar ' + allLength.length)
                await browser.pause(2000)

                
            for(let i=0;i<allLength.length;i++)
            {

                console.log('Navbar of webdriverIO Documentation' , await allLength[i].getText())
                await allLength[i].click()
                await browser.pause(2000)
                if(await allLength[i].getUrl() != "https://webdriver.io/docs/contribute"){
                    continue;
                }
                if(await allLength[i].getUrl() === "https://webdriver.io/docs/contribute"){
                    await browser.pause(2000)
                    await browser.navigateTo('https://www.google.com')
                    await browser.pause(2000)
                    await $('[name="q"]').setValue('Thank you so much')
                    await browser.pause(2000)
                    await $('[name="btnK"]').click()
                    await browser.pause(2000)
                    await browser.quit()
                }
                // if(await allLength[i].getUrl() === "https://webdriver.io/blog"){
                //     await browser.pause(2000)
                //     await browser.navigateTo('https://www.google.com')
                //     await browser.pause(2000)
                //     await $('[name="q"]').setValue('Thank you so much')
                //     await browser.pause(2000)
                //     await $('[name="btnK"]').click()
                //     await browser.pause(2000)
                //     await browser.quit()
                // }
                
            }
                
            } catch (err) {
                
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
        })
        
    
    

})