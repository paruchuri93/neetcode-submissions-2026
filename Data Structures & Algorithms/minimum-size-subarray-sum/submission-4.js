class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0,
            curr = 0;
        let minLen = Infinity;
        for (let r = 0; r < nums.length; r++) {
            curr += nums[r];
            while (curr >= target) {
                minLen = Math.min(minLen, r - left + 1);
                curr -= nums[left];
                left++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}
