class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = buy + 1;
        let maxProfit = 0;

        while (sell < prices.length) {
            let profit = 0;
            if (prices[buy] < prices[sell]) {
                profit = prices[sell] - prices[buy];
            } else {
                buy = sell;
            }
            sell++;

            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
