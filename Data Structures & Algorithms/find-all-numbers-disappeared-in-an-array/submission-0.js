class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers = (nums) => {
        const set = new Set();
        for (let i = 1; i <= nums.length; i++) set.add(i);

        for (let i = 0; i < nums.length; i++) {
            set.delete(nums[i]);
        }

        return Array.from(set);
    };
}
