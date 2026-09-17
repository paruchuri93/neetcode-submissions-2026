class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let count = new Set();
        let maxLen = -Infinity;

        for (let r = 0; r < s.length; r++) {
            while (count.has(s[r])) {
                count.delete(s[l]);
                l++;
            }
            count.add(s[r]);

            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen === - Infinity ? 0 : maxLen;
    }
}
