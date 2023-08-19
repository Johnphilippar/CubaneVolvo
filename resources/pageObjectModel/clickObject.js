

class clickObject{

    get objVideoClick(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/ytd-thumbnail/a/yt-image/img')
    }

    
    get objSearchClick(){
        return $('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/button')
    }

    get objCommentClick(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[5]/ytd-comment-simplebox-renderer/div[1]')
    }

    get objAvatarClick(){
        return $('//*[@id="avatar-btn"]')
    }

    get objSignOutClick(){
        return $('/html/body/ytd-app/ytd-popup-container/tp-yt-iron-dropdown/div/ytd-multi-page-menu-renderer/div[3]/div[1]/yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[4]/a/tp-yt-paper-item')
    }

    get objTopNotifClick(){
        return $('//*[@id="__docusaurus"]/div[2]/button')
    }

    get objCliManualClick(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[2]/a')
    }

    get objRunScriptClick(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[4]/a')
    }

    get objSystemReqClick(){
        return $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[2]/div/ul/li[6]/a')
    }

    get objGetStartedClick(){
        return $('//*[@id="__docusaurus"]/footer/div/div[1]/div[1]/ul/li[1]/a')
    }

    get objToggleNavBarClick(){
        return $('/html/body/div/nav/div[1]/div[1]/button')
    }

    get objCoreConceptClick(){
        return $('//*[@id="__docusaurus"]/nav/div[3]/div[2]/div[2]/ul/li[2]/div/a')
    }


}

module.exports = new clickObject()