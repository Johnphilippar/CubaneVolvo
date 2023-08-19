

class scrollObject{

    get objThumbnailScroll(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-shelf-renderer[1]/div[1]/div[2]/ytd-vertical-list-renderer/div[1]/ytd-video-renderer[2]/div[1]/div/div[1]/div/h3/a')
    }

    get objUploaderScroll(){
        return $('//*[@id="owner"]')
    }

}

module.exports = new scrollObject()