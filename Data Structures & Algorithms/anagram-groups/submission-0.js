class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length <= 1){
            return [strs];
        }

        const result = [];
        const visited = new Set();

        
        for(let i=0; i < strs.length; i++){
            if(visited.has(i)) continue;

            const currentGroup = [strs[i]];
            visited.add(i);

            for(let j = i + 1; j < strs.length; j++){
                if(this.isAnagram(strs[i], strs[j])){
                    currentGroup.push(strs[j]);
                    visited.add(j)
                }
            }

            result.push(currentGroup);
        }

        return result;

    }

    isAnagram(s1, s2){
        if(s1.length != s2.length) return false;

        const s1Count = {};
        const s2Count = {};

        for(let i=0; i<s1.length; i++){
            s1Count[s1[i]] = s1Count[s1[i]] ? s1Count[s1[i]] + 1 : 1;
            s2Count[s2[i]] = s2Count[s2[i]] ? s2Count[s2[i]] + 1 : 1; 
        }

        const keys1 = Object.keys(s1Count);
        
        if (keys1.length !== Object.keys(s2Count).length) return false;

        return keys1.every(key => s1Count[key] === s2Count[key]);
    }
}
