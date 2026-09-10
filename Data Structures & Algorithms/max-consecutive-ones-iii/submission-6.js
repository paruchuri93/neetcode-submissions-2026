class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let left = 0
        let maxLength = 0

        for(let right = 0; right < nums.length; right++){
                k-= nums[right] === 0 ? 1 : 0


            while(k < 0){
                    k+= nums[left] === 0 ? 1 : 0;
                left+=1
            }

            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength;
    }
}
