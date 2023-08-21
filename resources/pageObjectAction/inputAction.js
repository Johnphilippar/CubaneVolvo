
const utils = require('../../test/util/utils')
const inputObjectModel = require('../pageObjectModel/inputObjectModel')



class inputAction {

    async actInputSearchBar () {
        await inputObjectModel.objInputSearchBarModel.setValue(utils.searchBarInput)
    }

    async actCommentInput(){
        await inputObjectModel.objCommentInputrModel.setValue(utils.youtubeComment)
    }

    async actSearchInput(){
        await inputObjectModel.objSearchInputrModel.setValue(utils.searchValue)
    }


}

module.exports = new inputAction()