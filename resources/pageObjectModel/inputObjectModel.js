

class inputObjectModel { 
    
    get objInputSearchBarModel(){
        return $('[name="search_query"]')
    }


    get objCommentInputModel(){
        return $('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[5]/ytd-comment-simplebox-renderer/div[3]/ytd-comment-dialog-renderer/ytd-commentbox/div[2]/div/div[2]/tp-yt-paper-input-container/div[2]/div/div[1]/ytd-emoji-input/yt-user-mention-autosuggest-input/yt-formatted-string/div')
    }

    get objSearchInputModel(){
        return $('//*[@id="docsearch-input"]')
    }


}

module.exports = new inputObjectModel()