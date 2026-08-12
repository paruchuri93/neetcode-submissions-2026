class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:

        ans = [0]*2*len(nums)
        ans[0:len(nums)] = nums
        for i  in range(len(nums)):
            ans[1*len(nums) + i] = nums[i]

        return ans
        