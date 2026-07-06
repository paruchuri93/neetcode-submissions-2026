# class Solution:
#     def hasDuplicate(self, nums: List[int]) -> bool:
#         seen = set()
#         for num in nums:
#             if num in seen:
#                 return True
#             seen.add(num)
#         return False

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for n in range(1, len(nums)):
            if nums[n] == nums[n - 1]:
                return True
        return False
            

