class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        return new Array(2 * n).fill(0).map((val, i) => nums[i % n]);
    }
}
