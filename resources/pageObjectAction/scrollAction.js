
const scrollObject = require('../pageObjectModel/scrollObject')

class scrollAction {

    async actThumbnailScroll() {
        await scrollObject.objThumbnailScroll.scrollIntoView({ behavior: "smooth"})
    }
    
    async actUploaderScroll(){
        await scrollObject.objUploaderScroll.scrollIntoView({ behavior: "smooth"})
    }

}


module.exports = new scrollAction()