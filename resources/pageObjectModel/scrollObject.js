

class scrollObject{

    get objThumbnailScroll(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-shelf-renderer[1]/div[1]/div[2]/ytd-vertical-list-renderer/div[1]/ytd-video-renderer[2]/div[1]/div/div[1]/div/h3/a')
    }

    get objUploaderScroll(){
        return $('//*[@id="owner"]')
    }

    get objFooterScroll(){
        return $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/div')
    }

    get objInitiateWdioScroll(){
        return $('//*[@id="initiate-a-webdriverio-setup"]')
    }

    get objConfigurationScroll(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/p[17]')
    }

    get objCloseConfigurationScroll(){
        return $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[3]/div/button')
    }

    get objScrollIntoViewSearchScroll(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/div[1]/div')
    }

}

module.exports = new scrollObject()