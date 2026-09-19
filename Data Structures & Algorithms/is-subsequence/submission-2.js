class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (t.length < s.length) return false;

        let left = 0;
        for (let right = 0; right < t.length; right++) {
            if (left < s.length && t[right] === s[left]) {
                left++;
            }
        }

        return left === s.length;
    }
}