class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let left = 0;
        let maxLen = 0;
        let flips = 1;

        for (let right = 0; right < nums.length; right++) {
            flips -= nums[right] === 0 ? 1 : 0;

            while (flips < 0) {
                flips += nums[left] === 0 ? 1 : 0;
                left += 1;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
