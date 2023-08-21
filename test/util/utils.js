


class utils {


    
    get defaultPage(){
        return ('https://webdriver.io/docs/gettingstarted/')
    }

    get defaultDelay(){
        return (1000)
    }

    get emailCredential(){
        return ('Dummyt3st4ccount@gmail.com')
    }

    get passwordCredential(){
        return ('ph@ss0w0rd123')
    }

    get searchBarInput(){
        return ('Volvo cars')
    }

    get googleImage(){
        return ('//*[@class="lnXdpd"]')
    }

    get googleLocatorClass(){
        return ('height',92)
    }

    get youtubeComment(){
        return ('Keep up the good work and enjoy it!')
    }
    
    get closeTopNotifXpath(){
        return ('//*[@id="__docusaurus"]/div[2]/button')
    }

    get toogleBarObject(){
        return ('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li/div/a [@href="#"]')
    }

    get integrationToogleUCS(){
        return ('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[10]/ul/li[1]/a')
    }

    get uscTestingBotScroll(){
        return ('//*[@id="testingbot"]/a')
    }
    
    get searchValue(){
        return ('scrollIntoView')
    }

    get wdioNavBar(){
        return ('//*[@class="navbar__item navbar__link"]')
    }
}


module.exports = new utils();