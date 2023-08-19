

class checkerElementObject {

    
    get cliElemObject(){
        return ('//*[@id="install-cli-manually"]')
    }

    get systemReqElemObject(){
        return ('//*[@id="system-requirements"]')
    }

}

module.exports = new checkerElementObject()