class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let minD = Infinity;

        for (let i = 0; i <= nums.length - k; i++) {
            // let currD = nums[i + k - 1] - nums[i];
            let currentDifference = nums[i + k - 1] - nums[i];
            minD = Math.min(minD, currentDifference);
        }

        return minD;
    }
}
