

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

        await clickObject.objCliManualClick.click()

    }

}


module.exports = new clickAction()