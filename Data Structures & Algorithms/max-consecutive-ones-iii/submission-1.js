class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0,
            res = 0;
        for (let r = 0; r < nums.length; r++) {
            k -= nums[r] === 0 ? 1 : 0;
            while (k < 0) {
                k += nums[l] === 0 ? 1 : 0;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
