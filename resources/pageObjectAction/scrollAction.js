
const scrollObject = require('../pageObjectModel/scrollObject')

class scrollAction {

    async actThumbnailScroll() {
        await scrollObject.objThumbnailScroll.scrollIntoView({ behavior: "smooth"})
    }
    
    async actUploaderScroll(){
        await scrollObject.objUploaderScroll.scrollIntoView({ behavior: "smooth"})
    }
    
    async actFooterScroll(){
        await scrollObject.objFooterScroll.scrollIntoView({ behavior: "smooth" })
    }
    
    async actConfigurationScroll(){
        await scrollObject.objConfigurationScroll.scrollIntoView({ behavior : "smooth" })
    }
    
    async actCloseConfigurationScroll(){
        await scrollObject.objCloseConfigurationScroll.scrollIntoView({ behavior: "smooth" })
    }

    async actScrollIntoViewScroll(){
        await scrollObject.objScrollIntoViewSearchScroll.scrollIntoView({ behavior: "smooth" })
    }

  


}


module.exports = new scrollAction()