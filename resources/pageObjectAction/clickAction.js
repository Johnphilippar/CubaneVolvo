

const clickObject = require('../pageObjectModel/clickObject')

class clickAction {

    async actVideoClick(){
        await clickObject.objVideoClick.click()
    }

    async actSearchClick(){
        await clickObject.objSearchClick.click()
    }

    async actCommentClick(){
        await clickObject.objCommentClick.click()
    }

    async actAvatarClick(){
        await clickObject.objAvatarClick.click()
    }

    async actSignOutClick(){
        await clickObject.objSignOutClick.click()
    }
    
    async actTopNotifClick(){
        await clickObject.objTopNotifClick.click()
    }

    async actCliManualClick(){
        clickObject.objCliManualClick.click()
    }

    async actRunScriptClick(){
        await clickObject.objRunScriptClick.click()
    }

    async actSystemReqClick(){
        await clickObject.objSystemReqClick.click()
    }

    async actGetStartedClick(){
        await clickObject.objGetStartedClick.click()
    }

    async actToggleNavBarClick(){
        await clickObject.objToggleNavBarClick.click()
    }

    async actCoreConceptClick(){
        await clickObject.objCoreConceptClick.click()
    }
    
    async actConfigurationClick(){
        await clickObject.objConfigurationClick.click()
    }

    async actSearchClick(){
        await clickObject.objSearchClick.click()
    }

    async actBackToMainMenuClick(){
        await clickObject.objBackToMainMenuClick.click()
    }

    async actDocsClick(){
        await clickObject.objDocsClick.click()
    }

    async actGetAttributeClick(){
        await clickObject.objGetAttributeClick.click()
    }

    async actLanguageDdClick(){
        await clickObject.objLanguageDdClick.click()
    }

    async actCoreConceptsLanguageClick(){
        await clickObject.objCoreConceptLanguageClick.click()
    }

    async actWhyWebDriverIoClick(){
        await clickObject.objWhyWebDriverIoClick.click()
    }

    async actTrueOpenSource(){
        await clickObject.objTrueOpenSource.click()
    }


}


module.exports = new clickAction()