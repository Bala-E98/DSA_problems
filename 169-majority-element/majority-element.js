/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0;
    var result;
    for (var num of nums) {
        if (count <= 0) {
            count = 0;
            result = num;
        }
        if (count === 0 || result === num) {
            count +=1;
        } else {
            count -=1;
        }
    }
    return result
};