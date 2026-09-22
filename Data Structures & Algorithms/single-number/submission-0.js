class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        nums.sort();
        let l = 0;
        while(l < nums.length - 1){
            if(nums[l] === nums[l+1]){
                l+=2
            }else{
                return nums[l]
            }
        }
        return nums[l]
    }
}
