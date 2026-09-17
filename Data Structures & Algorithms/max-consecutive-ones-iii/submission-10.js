class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let count = 0;

        for(let r=0; r< nums.length; r++){
            if(nums[r] === 0){
                k--
            }

            while(k<0){
                if(nums[l] === 0){
                    k++;
                }
                l++;
            }
            count = Math.max(count, r - l + 1);
        }

        return count;
    }
}
