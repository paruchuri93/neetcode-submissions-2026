class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (ch) => (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9');

        const filtered = s
            .split('')
            .filter((c) => isAlphaNumeric(c))
            .map((c) => c.toLowerCase())
            .join('');

        return filtered === filtered.split('').reverse().join('');
    }
}
