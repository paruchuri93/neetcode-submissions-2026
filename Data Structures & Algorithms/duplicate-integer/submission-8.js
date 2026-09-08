class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {};

        for (let i = 0; i < nums.length; i++) {
            if (nums[i].toString() in count) {
                return true;
            } 
                count[nums[i]] = nums[i];
        }

        return false;
    }
}
