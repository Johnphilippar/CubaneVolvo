

class scrollObjectModel{

    get objThumbnailScrollModel(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-shelf-renderer[1]/div[1]/div[2]/ytd-vertical-list-renderer/div[1]/ytd-video-renderer[2]/div[1]/div/div[1]/div/h3/a')
    }

    get objUploaderScrollModel(){
        return $('//*[@id="owner"]')
    }

    get objFooterScrollModel(){
        return $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/div')
    }

    get objInitiateWdioScrollModel(){
        return $('//*[@id="initiate-a-webdriverio-setup"]')
    }

    get objConfigurationScrollModel(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/p[18]')
    }

    get objCloseConfigurationScrollModel(){
        return $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[3]/div/button')
    }

    get objScrollIntoViewSearchScrollModel(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div/div/article/div[2]/div[1]/div')
    }

    get objBaseOnWebStandarsScrollModel(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/ul[2]/li[1]')
    }

    get objTrueOpenSourceScrollModel(){
        return $('//*[@id="true-open-source"]')
    }

}

module.exports = new scrollObjectModel()