class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(str) {
        if (str.length === 0) return '';
        return str.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const res = [];
        let i = 0;
        while (i < s.length) {
            // Read length up to the next '#'
            let j = i;
            while (s[j] !== '#') j++;
            const len = parseInt(s.slice(i, j), 10);
            res.push(s.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}
