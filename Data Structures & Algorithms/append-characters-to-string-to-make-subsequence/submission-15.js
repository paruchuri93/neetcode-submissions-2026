class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            if (t[left] === s[right]) {
                left++;
            }
        }

        return t.length - left;
    }
}
