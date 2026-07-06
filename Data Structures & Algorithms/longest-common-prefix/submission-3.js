class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return '';
        let minLength = Math.min(...strs.map((s) => s.length));
        let res = '';
        for (let i = 0; i < minLength; i++) {
            let char = strs[0][i];
            for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return res;
            }
            }
            res += char;
        }

        return res;
    }


}
