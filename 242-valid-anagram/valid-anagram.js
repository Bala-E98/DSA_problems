/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var hash1= {};
    var hash2 = {};
    for (var i =0; i< s.length; i ++) {
        hash1[s[i]] = (hash1[s[i]] || 0 ) + 1;
        hash2[t[i]] = (hash2[t[i]] || 0 ) + 1;
    }
    for (var key in hash1) {
     if (hash1[key] !== hash2[key]) {
        return false
     }
    }
    return true
};