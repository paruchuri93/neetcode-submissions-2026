class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preff = new Array(nums.length);
        let suff = new Array(nums.length);
        let res = new Array(nums.length);

        preff[0] = 1;
        suff[nums.length - 1] = 1;

        for(let i = 1; i < nums.length; i++){
            preff[i] = preff[i - 1] * nums[i - 1]; 
        }

        for(let i = nums.length - 2; i >=0; i-- ){
            suff[i] = suff[i + 1] * nums[i + 1];
        }

        for(let i =0; i < nums.length; i++){
            res[i] = preff[i] * suff[i];
        }

        return res;
    }
}
