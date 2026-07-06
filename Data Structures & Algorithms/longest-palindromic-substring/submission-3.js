class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // let l = 0,
        // r = 0;
        // let longest = '';

        // const isPalindrome = (s) => {
        //     let left = 0;
        //     let right = s.length - 1;
        //     while (left < right) {
        //         if (s[left] !== s[right]) return false;
        //         left++;
        //         right--;
        //     }
        //     return true;
        // };

        // while (r < s.length) {
        //     let sub = s.slice(l, r + 1);
        //     if (isPalindrome(sub)) {
        //         r += 1;

        //         if (longest.length < sub.length) {
        //             longest = sub;
        //         }
        //     } else {
        //         l += 1;
        //         r += 1;
        //     }
        // }

        // return longest;
        let res = '';
        let resLen = 0;

        for (let i = 0; i < s.length; i++) {
            // odd expand from center
            let l = i,
            r = i;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    resLen = r - l + 1;
                    res = s.slice(l, r + 1);
                }
                l-=1
                r+=1
            }

            // even expand from center
            l = i;
            r = i + 1;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    resLen = r - l + 1;
                    res = s.slice(l, r + 1);
                }
                l-=1
                r+=1
            }
        }

        return res;
    }
}
