
const scrollObjectModel = require('../pageObjectModel/scrollObjectModel')

class scrollAction {

    async actThumbnailScroll() {
        await scrollObjectModel.objThumbnailScrollModel.scrollIntoView({ behavior: "smooth"})
    }
    
    async actUploaderScroll(){
        await scrollObjectModel.objUploaderScrollModel.scrollIntoView({ behavior: "smooth"})
    }
    
    async actFooterScroll(){
        await scrollObjectModel.objFooterScrollModel.scrollIntoView({ behavior: "smooth" })
    }
    
    async actConfigurationScroll(){
        await scrollObjectModel.objConfigurationScrollModel.scrollIntoView({ behavior : "smooth" })
    }
    
    async actCloseConfigurationScroll(){
        await scrollObjectModel.objCloseConfigurationScrollModel.scrollIntoView({ behavior: "smooth" })
    }

    async actScrollIntoViewScroll(){
        await scrollObjectModel.objScrollIntoViewSearchScrollModel.scrollIntoView({ behavior: "smooth" })
    }

    
    async actBaseOnWebStandarsScroll(){
        await scrollObjectModel.objBaseOnWebStandarsScrollModel.scrollIntoView({ behavior: "smooth" })
    }

    async actTrueOpenSourceScroll(){
        await scrollObjectModel.objTrueOpenSourceScrollModel.scrollIntoView({ behavior: "smooth" })
    }

  


}


module.exports = new scrollAction()