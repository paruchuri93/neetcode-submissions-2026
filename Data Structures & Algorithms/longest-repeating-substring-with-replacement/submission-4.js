class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0,
        maxCount = 0,
        maxLength = 0,
        count = {}

        for(let i= 0; i < s.length; i++){
            count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1
            maxCount = Math.max(maxCount, count[s[i]])

            while ((i - l + 1) - maxCount > k){
                count[s[l]]-=1
                l+=1
            }
            maxLength = Math.max(maxLength, i - l + 1)
        }
        return maxLength
    }
}
