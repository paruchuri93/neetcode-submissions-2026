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
            // Fast branching instead of ternary
            if (nums[right] === 0) {
                flips--;
            }

            // Window sliding instead of violent shrinking (if instead of while)
            if (flips < 0) {
                if (nums[left] === 0) {
                    flips++;
                }
                left++;
            }

            // Inline comparison instead of Math.max
            const currentLen = right - left + 1;
            if (currentLen > maxLen) {
                maxLen = currentLen;
            }
        }

        return maxLen;
    }
}
