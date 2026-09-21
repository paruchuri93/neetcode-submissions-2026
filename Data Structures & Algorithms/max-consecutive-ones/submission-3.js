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
                maxLen = Math.max(maxLen, curr);
            } else {
                curr = 0;
            }
        }

        return maxLen === -Infinity ? 0 : maxLen;
    }
}
