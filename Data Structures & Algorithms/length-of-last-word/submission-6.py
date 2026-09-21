class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        r = len(s) - 1

        while (s[r] == " "):
            r -= 1
        while r >= 0 and s[r] != " ":
            r-=1
            length += 1

        return length
        