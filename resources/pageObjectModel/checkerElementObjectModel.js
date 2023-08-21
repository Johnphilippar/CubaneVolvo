

class checkerElementObjectModel{

    
    get cliElemObjectModel(){
        return ('//*[@id="install-cli-manually"]')
    }

    get systemReqElemObjectModel(){
        return ('//*[@id="system-requirements"]')
    }

}

module.exports = new checkerElementObjectModel()