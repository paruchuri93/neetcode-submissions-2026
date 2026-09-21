class Solution:
    def countSeniors(self, details: List[str]) -> int:
        count = 0
        for s in details:
            ten = 10 * (ord(s[11]) - ord("0"))
            one = ord(s[12]) - ord("0")
            age = one + ten

            if age > 60:
                count += 1
        return count
