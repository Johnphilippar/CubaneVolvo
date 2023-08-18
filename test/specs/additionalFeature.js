const LoginPage = require("../pages/login.page")


describe('Additional Feature' , () => {
    
    it('Additional Feature for the code exam/test' , async () => {

        try {
            
        await browser.url('https://www.youtube.com')
        await browser.pause(2000)
        await browser.maximizeWindow()

        await $('//*[@id="buttons"]/ytd-button-renderer').click()

        await LoginPage.login('Dummyt3st4ccount@gmail.com','ph@ssw0rd123')
        await LoginPage.checkMessage()

        } catch (err) {
            await browser.navigateTo('https://www.volvo.com')
            console.error('Encounter an error in the login ' +err)
            await browser.closeWindow()
            await process.kill(1)
        }

        try {

            // const noButton = await $('//*[@id="dismiss-button"]/yt-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]')

            await $('[name="search_query"]').setValue('Volvo cars')
            await browser.pause(5000)
            await $('//*[@id="search-icon-legacy"]').click()
            await browser.pause(5000)
            await $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-shelf-renderer[1]/div[1]/div[2]/ytd-vertical-list-renderer').scrollIntoView({ behavior: "smooth"})
            await browser.pause(3000)
            
            await $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-shelf-renderer[1]/div[1]/div[2]/ytd-vertical-list-renderer/div[1]/ytd-video-renderer[2]/div[1]/ytd-thumbnail').click()
            await browser.pause(10000)
            await browser.keys('Space')
            await browser.pause(5000)
            // if(noButton){
            //     noButton.click()
            // }
            
            // await $('//*[@id="movie_player"]/div[28]/div[2]/div[1]/button').click()
            // await browser.pause(2000)
            await $('//*[@id="owner"]').scrollIntoView()
            await browser.pause(3000)
            await $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[5]/ytd-comment-simplebox-renderer/div[1]').click()
            await browser.pause(3000)
            await $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[5]/ytd-comment-simplebox-renderer/div[3]/ytd-comment-dialog-renderer/ytd-commentbox/div[2]/div/div[2]/tp-yt-paper-input-container/div[2]/div/div[1]/ytd-emoji-input/yt-user-mention-autosuggest-input/yt-formatted-string/div').setValue('Keep up the good work and enjoy it!')
            await browser.pause(3000)
            await browser.keys('Enter')
            await browser.pause(4000)
            await $('//*[@id="avatar-btn"]').click()
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