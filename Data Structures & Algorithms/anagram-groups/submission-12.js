class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for (let i = 0; i < strs.length; i++) {
            let curr = strs[i];
            let hash = new Array(26);
            for (let ch of curr) {
                let index = ch.charCodeAt(0) - "a".charCodeAt(0);
                hash[index] = (hash[index] || 0) + 1;
            }
            const key = hash.join(",");
            if (key in groups) {
                groups[key].push(curr);
            } else {
                groups[key] = [curr];
            }
        }

        return Object.values(groups);
    }
}
