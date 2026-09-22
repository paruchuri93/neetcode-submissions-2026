class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let curr = 0;
        let maxLen = -Infinity;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 0) {
                curr = 0;
            } else {
                curr++;
            }
            maxLen = Math.max(maxLen, curr);
        }

        return maxLen;
    }
}
