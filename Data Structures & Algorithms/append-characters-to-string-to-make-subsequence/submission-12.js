class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let minLen = t.length;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (minLen >= 0 && t[l] === s[r]) {
                l++;
                minLen--;
            }
        }

        return minLen;
    }
}
