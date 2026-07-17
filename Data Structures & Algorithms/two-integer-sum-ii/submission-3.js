class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let l = 0, r = nums.length - 1
        while(l < r) {
            let sum = nums[l] + nums[r]
            if(sum < target){
                l+=1
            } else if(sum > target){
                r-=1
            } else {
                return [l+1, r+1]
            }
        }

        return []
    }
}
