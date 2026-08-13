class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        strs.forEach((s)=>{
            const key = new Array(26).fill(0);

            for(let c of s){
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const resKey = key.join(',');

            if(!res[resKey]){
                res[resKey] = []
            }

            res[resKey].push(s)
        })

        return Object.values(res);
    }
}
