class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tCount = {};

        for (let i = 0; i < t.length; i++) {
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
        }

        let windowCount = {};

        let l = 0;
        let minStart = 0;
        let minLength = Infinity;
        let required = Object.keys(tCount).length;

        for (let r = 0; r < s.length; r++) {
            windowCount[s[r]] = (windowCount[s[r]] || 0) + 1;

            if (tCount[s[r]] && windowCount[s[r]] === tCount[s[r]]) {
                required--;
            }

            while (required === 0) {
                if (r - l + 1 < minLength) {
                    minStart = l;
                    minLength = r - l + 1;
                }

                windowCount[s[l]]--;
                if (tCount[s[l]] && windowCount[s[l]] < tCount[s[l]]) {
                    required++;
                }

                l++;
            }
        }

        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
