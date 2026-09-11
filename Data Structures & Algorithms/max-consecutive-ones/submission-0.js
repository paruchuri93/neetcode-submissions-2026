class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let  curr = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                curr += 1; // Math.max(curr, )
                count = Math.max(curr, count);
            } else {
                curr = 0;
            }

        }

        return count;
    }
}
