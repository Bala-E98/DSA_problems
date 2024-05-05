/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProf = 0;
    var l = 0;
    var r = 1;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            var prof = prices[r] - prices[l];
            maxProf = Math.max(maxProf, prof)
        } else {
          l = r
        }
        r +=1
    }
    return maxProf;
};