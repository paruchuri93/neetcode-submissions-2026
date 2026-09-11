class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = 0;
        let maxSum = -Infinity;

        for (let i =0; i<nums.length; i++) {
            if(curr < 0) {
                curr = 0;
            }
            curr+=nums[i];
            maxSum = Math.max(curr, maxSum);
        }

        return maxSum;
    }
}
