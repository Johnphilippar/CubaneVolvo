


class utils {


    
    get defaultPage(){
        return ('https://webdriver.io/docs/gettingstarted/')
    }

    get defaultDelay(){
        return (1500)
    }

    get emailCredential(){
        return ('Jpparhehe@gmail.com')
    }

    get passwordCredential(){
        return ('Parekoy.H<3')
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

}


module.exports = new utils();