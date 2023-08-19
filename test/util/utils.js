


class utils {


    
    get defaultPage(){
        return ('https://webdriver.io/docs/gettingstarted/')
    }

    get defaultDelay(){
        return (3000)
    }

    get emailCredential(){
        return ('Dummyt3st4ccount@gmail.com')
    }

    get passwordCredential(){
        return ('ph@ssw0rd123')
    }

    get searchBarInput(){
        return ('Volvo cars')
    }

    get youtubeComment(){
        return ('Keep up the good work and enjoy it!')
    }
    
    get closeTopNotifXpath(){
        return ('//*[@id="__docusaurus"]/div[2]/button')
    }

}


module.exports = new utils();