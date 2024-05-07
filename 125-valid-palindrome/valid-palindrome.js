/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var l = 0;
    var r = s.length -1;
    while(l < r) {
        while (l < r && !(/[a-zA-Z0-9]/g.test(s[l]))) {
            l +=1
        }
        while (r > l && !(/[a-zA-Z0-9]/g.test(s[r]))) {
            r -=1;
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            return false;
        }
        l +=1;
        r -=1;
    }
    return true;
};