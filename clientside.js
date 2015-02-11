//todo communicate back and forth between clientside.js and popup.js
//

if (typeof uetq != 'undefined') {
    if (uetq.domain === 'bat.bing.com') {
        alert('Boom! You are now using UET to track your conversions');
    } else {
        alert("Bummer... UET script was not correctly loaded")
    }
}
