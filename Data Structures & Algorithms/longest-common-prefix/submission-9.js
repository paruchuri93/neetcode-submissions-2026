class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = "";
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                let str = strs[j]
                if (i === str.length || str[i] !== strs[0][i]) {
                    return res;
                }
            }
            res += strs[0][i];
        }
        return res
    }
}
