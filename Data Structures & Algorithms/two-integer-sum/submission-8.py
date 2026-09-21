class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indecies = {}
        for i in range(len(nums)):
            num = target - nums[i]
            if num in indecies:
                return [indecies[num], i]
            indecies[nums[i]] = i