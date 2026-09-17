class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || s.length < t.length) return "";

        let tCount = new Array(128).fill(0);

        for (let i = 0; i < t.length; i++) {
            let index = t.charCodeAt(i);
            tCount[index] += 1;
        }

        let windowCount = new Array(128).fill(0);

        const matches = () => {
            for (let i = 0; i < 128; i++) {
                if (windowCount[i] < tCount[i]) {
                    return false;
                }
            }
            return true;
        };

        let l = 0;
        let minLen = Infinity;
        let minStart = 0;

        for (let r = 0; r < s.length; r++) {
            windowCount[s.charCodeAt(r)] += 1;

            while (matches()) {
                let currLen = r - l + 1;
                if (currLen < minLen) {
                    minStart = l;
                    minLen = currLen;
                }
                windowCount[s.charCodeAt(l)]--;
                l++;
            }
        }

        return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
    }
}
