class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        nums.sort()
        l = 0
        r = len(nums) - 1
        maxSum = -1

        while l < r:
            sum = nums[l] + nums[r]
            if sum < k:
                maxSum = max(maxSum, sum)
                l += 1
            else:
                r -= 1
        return maxSum;
