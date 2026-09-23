class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let maxLength = 0

        for(let num of numsSet){
            if(!(numsSet.has(num - 1))){
                let length = 1
                while(numsSet.has(num + length)){
                    length++
                }
                maxLength = Math.max(maxLength, length)
            }
        }
        return maxLength
    }
}
