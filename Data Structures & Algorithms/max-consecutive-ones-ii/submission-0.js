class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let left = 0
        let maxLength = 0
        let flips = 1

        for(let right = 0; right < nums.length; right++){
            if(nums[right] === 0){
                flips-=1
            }

            while(flips < 0){
                if (nums[left] === 0){
                    flips+=1
                } 
                left+=1
            }

            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength;
    }
}
