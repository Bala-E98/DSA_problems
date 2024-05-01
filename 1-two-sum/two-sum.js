/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if ((first + nums[j]) === target) {
                result.push(i, j);
                return result;
            }
        }
    }
    return result;
};