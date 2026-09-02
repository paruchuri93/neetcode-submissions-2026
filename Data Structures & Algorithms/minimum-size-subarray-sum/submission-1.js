class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity;
        let curr = 0;
        let left = 0;

        for (let i = 0; i < nums.length; i++) {
            curr += nums[i];

            while (curr >= target) {
                minLength = Math.min(minLength, i - left + 1);
                curr -= nums[left];
                left += 1;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
