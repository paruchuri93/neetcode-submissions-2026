class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const charString = new Array(26).fill(0);
        const charInd = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            charString[s.charCodeAt(i) - charInd]++;
            charString[t.charCodeAt(i) - charInd]--;

            
        }

        return charString.every((val) => val === 0);
    }
}
