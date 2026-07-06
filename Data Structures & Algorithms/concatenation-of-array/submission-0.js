class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArray = new Array(nums.length * 2).fill(0);

        return newArray
            .map((e, i) => i >= nums.length ? nums[Math.abs(i - nums.length)] : nums[i])
    }
}
