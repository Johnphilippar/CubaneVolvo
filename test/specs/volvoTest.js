


describe('WebDriverIo Code Test' , () => {
    
        it('VolvoCubao Code Test' , async () => {

            try {
    
                browser.url('https://webdriver.io/docs/gettingstarted/')
                browser.maximizeWindow()
                await browser.pause(2000)
                await $('//*[@id="__docusaurus"]/div[2]/button').click()
                const darkLightMode = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[2]/button')
                await darkLightMode.click();
                await browser.pause(2000)
                const installCliManual = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[2]/a')
                await installCliManual.click()
                await browser.pause(2000)
                const runScript = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[4]/a')
                await runScript.click();
                await browser.pause(2000)
                const systemRequirements = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[6]/a')
                await systemRequirements.click()
                await browser.pause(2000)
                const footer = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/div')
                await footer.scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
                const gettingStarted = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[1]/a')
                await gettingStarted.click()
                await browser.pause(2000)
                
                
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }  
    
            // EXPLORE SOME DOCUMENTS ON THE LEFT SIDE.
    
    
            try {
    
                const languageDropdown = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[1]')
                await languageDropdown.click()
                await browser.pause(2000)
    
                const coreConceptsClick = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[2]/div/a')
                await coreConceptsClick.click()
                await browser.pause(2000)
    
                const whyWebDriverIoClick = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[1]/ul/li[1]/a')
                await whyWebDriverIoClick.click()
                await browser.pause(2000)
    
                const baseOnWebStandards = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/ul[2]/li[1]')
                await baseOnWebStandards.scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
                
                const trueOpenSource = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[2]/a')
                await trueOpenSource.click()
                await browser.pause(2000)
    
                const guidesDropdown = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[4]/div/a')
                await guidesDropdown.click()
                await browser.pause(2000)
    
                const selectorGuides = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[4]/ul/li[1]/a')
                await selectorGuides.click()
                await browser.pause(2000)
    
                const xpathScroll = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/div[16]')
                await xpathScroll.scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
    
            } catch (err) {
                
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
    
            // SEARCH BAR
    
            try {
                
                const searchBar = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[3]/button/span[1]/span')
                await searchBar.click()
                // await browser.pause(2000)
                const searchInput = await $('//*[@id="docsearch-input"]')
                await searchInput.setValue('scrollIntoView')
                await browser.pause(2000)
                await browser.keys('Enter')
                await browser.pause(2000)
                
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
    
            // BLOG
    
            try {
                const gettingStarted = await $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[1]/a')
                await gettingStarted.click()
                await browser.pause(2000)
                await browser.newWindow('https://webdriver.io/blog')
                await browser.pause(2000)
                const typescriptSupport = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/aside/nav/ul/li[2]/a')
                await typescriptSupport.click()
                await browser.pause(2000)
                const typescriptScrollDown = await $('/html/body/div/div[2]/div/div/main/article/div/p[10]')
                await typescriptScrollDown.scrollIntoView({ behavior: "smooth"})
                await browser.pause(2000)
                const nextPage = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/main/nav/a[2]')
                await nextPage.click()
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[3]/a').click()
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[4]/a').click()
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/div/div/div/ul/li[6]/ul/li[1]/a').click()
                await browser.pause(2000)
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
    
            // CONTRIBUTE
    
            try {
                
                await browser.newWindow('https://webdriver.io/docs/contribute')
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[5]').scrollIntoView({behavior: "smooth"})
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[19]').scrollIntoView({behavior: "smooth"})
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[6]/a').click()
                await browser.pause(2000)
                await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[1]/a').click()
                await browser.pause(2000)
            } catch (err) {
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
    
            try {
                await browser.switchWindow('https://webdriver.io/docs/gettingstarted')
                await browser.pause(2000)
                const allLength = await $$('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a')
                console.log('total length of navbar ' + allLength.length)
                await browser.pause(2000)
    
                for(let i=0;i<allLength.length;i++)
            {
                console.log('Navbar of webdriverIO Documentation' , await allLength[i].getText())
                await allLength[i].click()
                // await browser.pause(2000)
                if(await allLength[i].getText() == "Sponsor"){
                    await browser.pause(2000)
                    await browser.navigateTo('https://www.google.com')
                    await browser.pause(2000)
                    await $('[name="q"]').setValue('Thank you so much')
                    await browser.pause(2000)
                    await $('[name="btnK"]').click()
                    await browser.pause(5000)
                    await browser.closeWindow
                }    
            }
                
            } catch (err) {
                
                await browser.navigateTo('https://www.volvo.com')
                console.error('Encounter an error ' +err)
                await browser.closeWindow()
                
            }
   
        })
    
    

})