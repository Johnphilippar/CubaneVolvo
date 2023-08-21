


const buttonAction = require('../../resources/pageObjectAction/buttonAction')
const clickAction = require('../../resources/pageObjectAction/clickAction')
const clickObject = require('../../resources/pageObjectModel/clickObject')
const utils = require('../util/utils')
const waitForObject = require('../../resources/pageObjectModel/waitForObject')
const checkerElementObject = require('../../resources/pageObjectModel/checkerElementObject')
const expectObject = require('../../resources/pageObjectModel/expectElemName')
const scrollAction = require('../../resources/pageObjectAction/scrollAction')
const inputAction = require('../../resources/pageObjectAction/inputAction')
const scrollObject = require('../../resources/pageObjectModel/scrollObject')
const inputObject = require('../../resources/pageObjectModel/inputObject')


describe('WebDriverIo Code Test' , () => {
      it("VolvoCubao Code Test 1", async () => {

        browser.url(utils.defaultPage);
        browser.maximizeWindow();
    
        await waitForObject.getStarted.waitForDisplayed({
          timeout: 5000,
          timeoutMsg: "Timeout message is working",
        });
    
    
        await expect(browser).toHaveUrl(
          "https://webdriver.io/docs/gettingstarted/"
        );
        console.log("Expect tohaveUrl is working.");
    
        await clickAction.actTopNotifClick();
        await browser.pause(utils.defaultDelay);
        await buttonAction.actDarkModeButton();
        await browser.pause(utils.defaultDelay);
        await clickAction.actCliManualClick();
    
        await expect(browser).toHaveUrl(
          "https://webdriver.io/docs/gettingstarted/#install-cli-manually"
        );
    
        await browser.pause(utils.defaultDelay);
        const cliChecker = await $(checkerElementObject.cliElemObject);
        await expect(cliChecker).toHaveId(expectObject.cliElemName);
    
        await browser.pause(utils.defaultDelay);
        await clickAction.actRunScriptClick();
        await clickObject.objRunScriptClick.waitForDisplayed({
          timeout: 5000,
          timeoutMsg: "Timeout message is working",
        });
        await browser.pause(utils.defaultDelay);
    
        const systemReqChecker = await $(checkerElementObject.systemReqElemObject);
        await expect(systemReqChecker).toHaveId(expectObject.systemReqElemName);
    
        await browser.pause(utils.defaultDelay);
        await scrollAction.actFooterScroll();
        await browser.pause(utils.defaultDelay);
        await clickAction.actGetStartedClick();
        await browser.pause(utils.defaultDelay);
    
        await clickAction.actLanguageDdClick()
        await browser.pause(utils.defaultDelay);
    
        await clickAction.actCoreConceptsLanguageClick()
        await browser.pause(utils.defaultDelay);
    
        await clickAction.actWhyWebDriverIoClick()
        await browser.pause(utils.defaultDelay);
    
        await scrollAction.actBaseOnWebStandarsScroll()
        await browser.pause(utils.defaultDelay);
        
        await scrollAction.actTrueOpenSourceScroll()
        await browser.pause(utils.defaultDelay);
    
      });
    
      it("WebdriverIO Toogle 1", async () => {
        await browser.url("https://webdriver.io/docs/gettingstarted/");
        await waitForObject.getStarted.waitForDisplayed({
          timeout: 5000,
          timeoutMsg: "Timeout message is working",
        });
        await browser.pause(utils.defaultDelay);
        await browser.setWindowSize(950, 1000);
        await clickAction.actToggleNavBarClick();
        await browser.pause(utils.defaultDelay);
        await clickAction.actCoreConceptClick();
        await expect(clickObject.objCoreConceptClick).toHaveText("Core Concepts");
        await clickAction.actCoreConceptClick();
        await expect(clickObject.objCoreConceptClick).toHaveText("Core Concepts");
        
        await clickAction.actConfigurationClick();
        await expect(clickObject.objConfigurationClick).toHaveUrl(
          "https://webdriver.io/docs/configuration"
        );
        await clickObject.objConfigurationClick.waitForExist({ timeout: 5000 , timeoutMsg: 'The Configuration Did not work'})
    
        await scrollAction.actConfigurationScroll();
        await expect(scrollObject.objConfigurationScroll).toHaveText(
          "Next to the WebDriver based capabilities you can apply browser and vendor specific options that allow deeper configuration to the remote browser or device. These are documented in the corresponding vendor docs, e.g.:"
        );
        await clickAction.actToggleNavBarClick();
        await browser.pause(utils.defaultDelay);
        await scrollAction.actCloseConfigurationScroll();
        await browser.pause(utils.defaultDelay);
    
        const toogleBar = await $$(utils.toogleBarObject);
    
        for (let i = 0; i < toogleBar.length; i++) {
          await toogleBar[i].click();
          await browser.pause(1500);
    
          if ((await toogleBar[i].getText()) != "Integration") {
            continue;
          }
    
          const endToogle = await $(utils.integrationToogleUCS);
    
          if (endToogle != null) {
            await endToogle.click();
            await browser.pause(2000);
            break;
          }
    
          await $(utils.uscTestingBotScroll).scrollIntoView({ behavior: "smooth" });
          await browser.pause(2000);
        }
      });
    
      it("Search 1", async () => {
        await clickAction.actSearchClick();
        await browser.pause(utils.defaultDelay);
        await inputObject.objSearchInput.setValue("scrollIntoView");
        await browser.pause(utils.defaultDelay);
        await browser.keys("Enter");
        await browser.pause(utils.defaultDelay);
        await scrollAction.actScrollIntoViewScroll();
        await expect(scrollObject.objScrollIntoViewSearchScroll).toHaveUrl(
          "https://webdriver.io/docs/api/element/scrollIntoView/"
        );
        await browser.pause(utils.defaultDelay);
        await clickAction.actToggleNavBarClick();
        await browser.pause(utils.defaultDelay);
        await expect(clickObject.objGetAttributeClick).toHaveText("getAttribute");
        await clickAction.actGetAttributeClick();
        await browser.pause(utils.defaultDelay);
        await clickAction.actToggleNavBarClick();
        await browser.pause(utils.defaultDelay);
        await clickAction.actBackToMainMenuClick();
        await browser.pause(utils.defaultDelay);
        await expect(clickObject.objDocsClick).toHaveText("Docs");
        await clickAction.actDocsClick();
        await browser.pause(utils.defaultDelay);
      });
    
      it("WebdriverIO Navbar Loop 1", async () => {
        await browser.url(utils.defaultPage);
        await browser.maximizeWindow();
        let navBarItems = await $$(utils.wdioNavBar);
        console.log("total length of navbar " + navBarItems.length);
        await browser.pause(2000);
    
        for (let i = 0; i < navBarItems.length; i++) {
          console.log(
            "Navbar of webdriverIO Documentation",
            await navBarItems[i].getText()
          );
          await navBarItems[i].click();
          await browser.pause(1000);
    
          if(await navBarItems[i].getUrl() == "https://webdriver.io/docs/contribute"){
            await browser.pause(2000);
            break;
          }
    
          navBarItems = await $$(utils.wdioNavBar);
    
        }
    
        await expect(browser).toHaveUrl("https://webdriver.io/docs/contribute");

      });
})
