

class waitForObjectModel {

    get getStartedModel(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div')
    }

}

module.exports = new waitForObjectModel()