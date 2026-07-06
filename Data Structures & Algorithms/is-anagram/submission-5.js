class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sumS = [...s].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
        const sumT = [...t].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);

        return sumS === sumT ? s.split('').every((val) => t.includes(val)) : false;
    }
}
