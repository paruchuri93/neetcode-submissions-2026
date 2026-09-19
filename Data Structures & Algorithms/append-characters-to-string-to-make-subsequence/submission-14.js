class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (t[l] === s[r]) {
                l++;
            }
        }

        return t.length - l;
    }
}
