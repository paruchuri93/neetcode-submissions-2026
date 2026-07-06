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
        let sumS = 0,sumT = 0;
        sumS = [...s].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
        sumT = [...t].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);

        return sumS === sumT ? s.split('').every((val) => t.includes(val)) : false;
    }
}
