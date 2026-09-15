class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let longest = 0;
        let window = new Set();

        for (let r = 0; r < s.length; r++) {
            while (window.has(s[r])) {
                window.delete(s[l]);
                l++;
            }
            window.add(s[r])
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
