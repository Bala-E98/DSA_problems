/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    var position = word.indexOf(ch)
    if (position == -1) {
        return word
    }
    var result = []
    for (var i = 0; i < word.length; i++) {
        if (i <= position) {
            result.unshift(word[i]);
        }
        else {
            result.push(word[i]);
        }
    }
    return result.join('')
};