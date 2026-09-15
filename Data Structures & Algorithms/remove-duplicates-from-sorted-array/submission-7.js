class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 1;
        let r = 1;

        while (r < nums.length) {
            if (nums[r - 1] !== nums[r]) {
                nums[l++] = nums[r];
            }
            r++;
        }

        return l;
    }
}
