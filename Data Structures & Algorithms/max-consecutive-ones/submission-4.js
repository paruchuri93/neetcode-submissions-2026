class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let curr = 0;
        let maxLen = -Infinity;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 1) {
                curr++;
            } else {
                curr = 0;
            }
                maxLen = Math.max(maxLen, curr);
        }

        return maxLen === -Infinity ? 0 : maxLen;
    }
}
