class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = 0;
        let maxSum = -Infinity;

        for (let i =0; i<nums.length; i++) {
            curr  = Math.max(curr, 0) + nums[i];
            maxSum = Math.max(curr, maxSum);
        }

        return maxSum;
    }
}
