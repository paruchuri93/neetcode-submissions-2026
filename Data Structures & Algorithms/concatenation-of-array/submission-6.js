class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let initial_length = nums.length;
        for (let i = 0; i < initial_length; i++) {
            nums.push(nums[i]);
        }
        return nums;
    }
}
