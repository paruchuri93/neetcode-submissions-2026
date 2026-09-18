class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tCount = {};
        let window = {};

        for (let i = 0; i < t.length; i++) {
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
        }

        let l = 0;
        let minStart = 0;
        let minLen = Infinity;
        let required = Object.keys(tCount).length;
        for (let j = 0; j < s.length; j++) {
            window[s[j]] = (window[s[j]] || 0) + 1;

            if (tCount[s[j]] && window[s[j]] === tCount[s[j]]) {
                required--;
            }

            while (required === 0) {
                if (j - l + 1 < minLen) {
                    minStart = l;
                    minLen = j - l + 1;
                }
                window[s[l]]--;

                if (tCount[s[l]] && window[s[l]] < tCount[s[l]]) {
                    required++;
                }
                l++;
            }
        }

        return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
    }
}
