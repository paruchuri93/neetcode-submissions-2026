class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPali(s, l, r) {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }
            return true;
        };
    validPalindrome(s) {
        let l = 0,
            r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) {
                return this.isPali(s, l + 1, r) || this.isPali(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;

    }
}
