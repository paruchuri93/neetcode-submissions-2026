class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0

        longest = 0
        curr = ""

        for i in s:
            if i not in curr:
                curr +=i
            else:
                curr = curr[curr.index(i)+1:]+i
            longest = max(longest, len(curr))
        return longest


        
        