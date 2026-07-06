class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
  let profit = 0;
  let buy = 0;
  let sell = 0;

  let l = 0,
    r = 1;

  while (r <= prices.length - 1) {
    let currProfit = 0;

    if (prices[l] < prices[r]) {
      buy = prices[l];
      sell = prices[r];
    } else if (prices[l] > prices[r]) {
      l = r;
    }
    r += 1;

    currProfit = sell - buy;

    profit = Math.max(currProfit, profit);
  }

  return profit;
};

}
