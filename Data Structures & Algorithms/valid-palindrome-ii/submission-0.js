class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                // Mismatch found! Split into two universes.
                // We use a helper function that just does a strict palindrome check
                return this.isStrictPalindrome(s, l + 1, r) || 
                       this.isStrictPalindrome(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }

    // Helper function: standard Two Pointer check with no skipping allowed
    isStrictPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    
    }
}
