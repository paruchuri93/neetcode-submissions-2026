class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // let l = 0;
        // let r = s2.length;

        // while (l < r) {
        //     let sub = s2.slice(l, r + 1);
        //     let words = {};
        //     for (let s of sub) words[s] = (words[s] || 0) + 1;
        //         if (Object.keys(words).length === s1.length) {
        //         return true;
        //     }

        //     l += 1;
        // }

        // return false;

        let l = 0;
        let r = s2.length;
        let s1Count = {};
        for (let s of s1) s1Count[s] = (s1Count[s] || 0) + 1;

        while (l <= r - s1.length) { // only check windows of length s1
            let sub = s2.slice(l, l + s1.length);
            let words = {};
            for (let s of sub) words[s] = (words[s] || 0) + 1;

            // Compare full frequency objects, not just keys
            let isAnagram = true;
            for (let key in s1Count) {
            if (words[key] !== s1Count[key]) {
                isAnagram = false;
                break;
            }
            }
            // Check for extra keys in words
            for (let key in words) {
            if (!(key in s1Count)) {
                isAnagram = false;
                break;
            }
            }
            if (isAnagram) return true;

            l += 1;
        }

        return false;

    }
}
