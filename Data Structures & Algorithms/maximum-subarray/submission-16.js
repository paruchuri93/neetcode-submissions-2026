class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity
        let currSum = 0

        for(let n of nums){
            currSum = Math.max(currSum, 0) + n;

            if(currSum > maxSum){
                maxSum = currSum
            } 
        }

        return maxSum;
    }
}
