class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let curr = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let l = 0;
            while (l < curr.length && l < strs[i].length && curr[l] === strs[i][l]) {
                l++;
            }
                curr = curr.slice(0, l);
        }
        return curr;
    }
}
