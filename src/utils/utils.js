function avatarColor(userId) {
    let hash = userId.split('').reduce(function(pre, cur, index) {
        let tmp = pre+cur.charCodeAt()*index;
        tmp %= 256*256*256;
        return tmp;
    }, 1)
    return '#'+hash.toString(16).padEnd(6, 'f')
}

function timeResolver(ms) {
    let relativeTime
    let passTime =  Date.now() - ms
    let days = parseInt(passTime/(1000 * 60 * 60 * 24))
    let mins = parseInt(passTime/(1000 * 60) - (days * 60 * 24))
    // different display mode
    if (days > 0) {
        if (days >= 365) {
            relativeTime = Math.floor(days/365) + "年前"
        } else {
            if (days >= 30) {
                relativeTime = Math.floor(days/30) + "个月前"
            } else {
                relativeTime = Math.floor(days) + "天前"
            }
        }
    } else {
        if (mins >= 60) {
            relativeTime = Math.floor(mins/60) + "小时前"
        } else {
            relativeTime = Math.floor(mins) + "分钟前"
        }
    }
    return relativeTime;
}
module.exports = {
    avatarColor: avatarColor,
    timeResolver: timeResolver
}
