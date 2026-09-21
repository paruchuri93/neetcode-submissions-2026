class Solution:
    def scoreOfString(self, s: str) -> int:
        score = 0
        left = 0
        right = 1

        while right <= len(s) - 1:
            score += abs(ord(s[right]) - ord(s[left]))
            left += 1
            right += 1
        return score
