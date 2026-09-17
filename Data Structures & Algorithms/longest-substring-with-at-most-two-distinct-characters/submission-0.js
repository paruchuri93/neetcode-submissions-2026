class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let l = 0;
        const seen = new Map();
        let maxLen = 0;

        for (let i = 0; i < s.length; i++) {
            seen.set(s[i], (seen.get(s[i]) || 0) + 1);

            while (seen.size > 2) {
                seen.set(s[l], seen.get(s[l]) - 1);
                if (seen.get(s[l]) === 0) {
                    seen.delete(s[l]);
                }
                l++;
            }
            maxLen = Math.max(maxLen, i - l + 1);
        }

        return maxLen;
    }
}
