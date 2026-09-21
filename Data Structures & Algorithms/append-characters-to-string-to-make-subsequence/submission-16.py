class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        left = 0

        for right in range(len(s)):
            if left == len(t):
                break
            if t[left] == s[right]:
                left += 1
        return len(t) - left
