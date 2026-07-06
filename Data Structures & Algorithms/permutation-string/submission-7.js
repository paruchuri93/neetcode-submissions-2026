class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97] += 1;
            s2Count[s2.charCodeAt(i) - 97] += 1;
        }

        const isMatches = () => s1Count.every((val, i) => val === s2Count[i]);
        if (isMatches()) return true;

        for (let i = s1.length; i < s2.length; i++) {
            s2Count[s2.charCodeAt(i) - 97] += 1;
            s2Count[s2.charCodeAt(i - s1.length) - 97] -= 1;

            if (isMatches()) return true;
        }
        return false;

        // let l = 0;
        // let r = s2.length;
        // let s1Count = {};
        // for (let s of s1) s1Count[s] = (s1Count[s] || 0) + 1;

        // while (l <= r - s1.length) { // only check windows of length s1
        //     let sub = s2.slice(l, l + s1.length);
        //     let words = {};
        //     for (let s of sub) words[s] = (words[s] || 0) + 1;

        //     // Compare full frequency objects, not just keys
        //     let isAnagram = true;
        //     for (let key in s1Count) {
        //     if (words[key] !== s1Count[key]) {
        //         isAnagram = false;
        //         break;
        //     }
        //     }
        //     // Check for extra keys in words
        //     for (let key in words) {
        //     if (!(key in s1Count)) {
        //         isAnagram = false;
        //         break;
        //     }
        //     }
        //     if (isAnagram) return true;

        //     l += 1;
        // }

        // return false;

    }
}
