

class waitForObject {

    get getStarted(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div')
    }

}

module.exports = new waitForObject()