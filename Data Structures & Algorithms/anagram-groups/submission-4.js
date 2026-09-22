class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for(let i=0; i<strs.length;i++){
                let curr = strs[i];
                let hash = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                let index = curr.charCodeAt(j) - "a".charCodeAt(0);
                hash[index] = (hash[index] || 0) + 1
            }

            if(hash in groups){
                groups[hash].push(curr);
            } else {
                groups[hash] = [curr]
            }
        }

        return Object.values(groups);
    }
}
