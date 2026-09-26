class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let s1Hash = new Array(26).fill(0);
        let s2Hash = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Hash[s1.charCodeAt(i) - 97] += 1;
            s2Hash[s2.charCodeAt(i) - 97] += 1;
        }

        const matches = () => {
            for (let i = 0; i < 26; i++) {
                if (s1Hash[i] !== s2Hash[i]) {
                    return false;
                }
            }
            return true;
        };

        if (matches()) {
            return true;
        }

        for (let i = s1.length; i < s2.length; i++) {
            s2Hash[s2.charCodeAt(i) - 97] += 1;

            s2Hash[s2.charCodeAt(i - s1.length) - 97] -= 1;

            if (matches()) {
                return true;
            }
        }
        return false;
    }
}
