// const { defaultDelay } = require("../util/utils")
const clickAction = require('../../resources/pageObjectAction/clickAction')
const detectLocatorAction = require('../../resources/pageObjectAction/detectLocatorAction')
const inputAction = require('../../resources/pageObjectAction/inputAction')
const loginPageObjectAction = require('../../resources/pageObjectAction/loginPageObjectAction')
const scrollAction = require('../../resources/pageObjectAction/scrollAction')
const utils = require("../util/utils")
// const detectLocator = require('../../resources/pageObjectAction')
// const elementVerifierAction = require('../../resources/pageObjectAction/elementVerifierAction')


describe('Additional Feature' , () => {
    
    it('Additional Feature for the code exam/test' , async () => {

        try {
            
        await browser.url('https://www.youtube.com')
        await browser.maximizeWindow()
        await browser.pause(5000)

        await $('//*[@id="buttons"]/ytd-button-renderer').click()
        await loginPageObjectAction.login(utils.emailCredential,utils.passwordCredential)
        // await elementVerifierAction.checkForElement('/html/body/ytd-app/div[1]/tp-yt-app-drawer/div[2]/div/div[2]/div[2]/ytd-guide-renderer/div[1]/ytd-guide-section-renderer[1]/div/ytd-guide-entry-renderer[3]/a/tp-yt-paper-item/yt-formatted-string')
        // console.log('The checkmessage is working')
        // browser.pause(utils.defaultDelay)
        } catch (err) {
            await browser.navigateTo('https://www.volvo.com')
            console.error('Encounter an error in the login ' +err)
            await browser.closeWindow()
            await process.kill(1)
        }

        try {

            await inputAction.actInputSearchBar()
            await clickAction.actSearchClick()
            await browser.pause(5000)
            await scrollAction.actThumbnailScroll()
            await clickAction.actVideoClick();
            await browser.pause(10000)
            await browser.keys('Space')
            await browser.pause(5000)
            await scrollAction.actUploaderScroll()
            await browser.pause(3000)
            await clickAction.actCommentClick()
            await browser.pause(3000)
            await inputAction.actCommentInput()
            await browser.pause(3000)
            await browser.keys('Space')
            await browser.pause(4000)
            await clickAction.actAvatarClick()
            await browser.pause(2000)
            await $('/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[4]/a/tp-yt-paper-item').click()
            await browser.pause(5000)

        } catch (err) {

            await browser.navigateTo('https://www.volvo.com')
            console.error('Encounter an error in youtube testing ' +err)
            await browser.closeWindow()
            await process.kill(1)
            
        }

    })

})