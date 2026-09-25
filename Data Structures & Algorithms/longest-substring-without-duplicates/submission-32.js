class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let longest = -Infinity;
        let count = {};

        for (let r = 0; r < s.length; r++) {
            if (s[r] in count) {
                l = Math.max(count[s[r]] + 1, l);
            }
            count[s[r]] = r;
            longest = Math.max(longest, r - l + 1);
        }

        return longest === -Infinity ? 0 : longest;
    }
}
