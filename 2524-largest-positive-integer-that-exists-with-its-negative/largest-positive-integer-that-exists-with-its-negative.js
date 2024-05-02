/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    // Initialize a set to store negative numbers
    let neg = new Set();

    // Loop through the numbers and insert negative numbers into the set
    for (let num of nums) {
        if (num < 0) {
            neg.add(num);
        }
    }

    let ans = -1;

    for (let num of nums) {
        // If current number is greater than ans and its negation exists in the set
        if (num > ans && neg.has(-num)) {
            ans = num;
        }
    }

    return ans;
};