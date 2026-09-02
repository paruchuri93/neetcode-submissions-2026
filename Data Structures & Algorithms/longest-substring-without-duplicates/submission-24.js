class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0) return 0

        let curr = '', l = 0, r = 1, maxLength = 0

        while(l < s.length){
            if(!curr.includes(s[l])){
                curr +=s[l]
                l+=1
            } else {
                curr = curr.slice(curr.indexOf(s[l]) + 1, curr.length) + s[l]
                l+=1
            }
                maxLength = Math.max(maxLength, curr.length)
        }
            return maxLength

    }

}
