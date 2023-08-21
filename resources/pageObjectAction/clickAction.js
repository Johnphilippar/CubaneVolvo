

const clickObjectModel = require('../pageObjectModel/clickObjectModel')

class clickAction {

    async actVideoClick(){
        await clickObjectModel.objVideoClickModel.click()
    }

    async actSearchClick(){
        await clickObjectModel.objSearchClickModel.click()
    }

    async actCommentClick(){
        await clickObjectModel.objCommentClickModel.click()
    }

    async actAvatarClick(){
        await clickObjectModel.objAvatarClickModel.click()
    }

    async actSignOutClick(){
        await clickObjectModel.objSignOutClickModel.click()
    }
    
    async actTopNotifClick(){
        await clickObjectModel.objTopNotifClickModel.click()
    }

    async actCliManualClick(){
        clickObjectModel.objCliManualClickModel.click()
    }

    async actRunScriptClick(){
        await clickObjectModel.objRunScriptClickModel.click()
    }

    async actSystemReqClick(){
        await clickObjectModel.objSystemReqClickModel.click()
    }

    async actGetStartedClick(){
        await clickObjectModel.objGetStartedClickModel.click()
    }

    async actToggleNavBarClick(){
        await clickObjectModel.objToggleNavBarClickModel.click()
    }

    async actCoreConceptClick(){
        await clickObjectModel.objCoreConceptClickModel.click()
    }
    
    async actConfigurationClick(){
        await clickObjectModel.objConfigurationClickModel.click()
    }

    async actSearchClick(){
        await clickObjectModel.objSearchClickModel.click()
    }

    async actBackToMainMenuClick(){
        await clickObjectModel.objBackToMainMenuClickModel.click()
    }

    async actDocsClick(){
        await clickObjectModel.objDocsClickModel.click()
    }

    async actGetAttributeClick(){
        await clickObjectModel.objGetAttributeClickModel.click()
    }

    async actLanguageDdClick(){
        await clickObjectModel.objLanguageDdClickModel.click()
    }

    async actCoreConceptsLanguageClick(){
        await clickObjectModel.objCoreConceptLanguageClickModel.click()
    }

    async actWhyWebDriverIoClick(){
        await clickObjectModel.objWhyWebDriverIoClickModel.click()
    }


}


module.exports = new clickAction()