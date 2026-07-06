class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minBuy = float('inf')
        maxP = 0
        for n in prices:
            minBuy = min(minBuy, n)
            maxP = max(maxP, n - minBuy)
        return maxP
        
        