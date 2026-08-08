class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const res = new Array(2 * nums.length);

        for(let i =0; i< res.length; i++){
            res[i] = nums[i % nums.length]
        }

        return res;
    }
}
