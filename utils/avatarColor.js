const getAvatarColor = function(userId) {
    let hash = userId.split('').reduce(function(pre, cur, index) {
        let tmp = pre+cur.charCodeAt()*index;
        tmp %= 256*256*256;
        return tmp;
    }, 1)
    return '#'+hash.toString(16).padEnd(6, 'f');
}

export { getAvatarColor };