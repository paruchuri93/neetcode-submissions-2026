class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let leftSum = 0;
        let total =0;
        for(let n of nums){
            total+=n
        }

        for (let i = 0; i < nums.length; i++) {
            let rightSum = total - nums[i] - leftSum;
            if(leftSum === rightSum){
                return i
            }
            leftSum+=nums[i]
        }

        return -1;
    }
}
