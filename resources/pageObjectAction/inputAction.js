
const utils = require('../../test/util/utils')
const inputObject = require('../pageObjectModel/inputObject')



class inputAction {

    async actInputSearchBar () {
        await inputObject.objInputSearchBar.setValue(utils.searchBarInput)
    }

    async actCommentInput(){
        await inputObject.objCommentInput.setValue(utils.youtubeComment)
    }


}

module.exports = new inputAction()