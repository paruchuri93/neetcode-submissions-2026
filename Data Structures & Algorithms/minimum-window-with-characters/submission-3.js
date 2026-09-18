class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tCount = new Array(128).fill(0);
        let window = new Array(128).fill(0);

        for (let i = 0; i < t.length; i++) {
            tCount[t.charCodeAt(i)]++;
        }

        const matches = () => {
            for (let i = 0; i < 128; i++) {
                if (tCount[i] > window[i]) return false;
            }
            return true;
        };

        let l = 0;
        let minStart = 0;
        let minLen = Infinity;
        for (let r = 0; r < s.length; r++) {
            window[s.charCodeAt(r)]++;

            while (matches()) {
                if (r - l + 1 < minLen) {
                    minStart = l;
                    minLen = r - l + 1;
                }
                window[s.charCodeAt(l)]--;
                l++;
            }
        }

        return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
    }
}
