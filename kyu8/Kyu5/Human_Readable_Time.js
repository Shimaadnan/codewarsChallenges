function humanReadableTime(seconds){
    if(seconds<=0) return `00:00:00`
    let hours=Math.floor(seconds/3600)
    let minutes=Math.floor((seconds%3600)/60)
    let remainingseconds=seconds%60
    return(
        ('0'+ hours).slice(-2)+
        ('0'+ minutes).slice(-2)+
        ('0'+ remainingseconds).slice(-2)

    )
}