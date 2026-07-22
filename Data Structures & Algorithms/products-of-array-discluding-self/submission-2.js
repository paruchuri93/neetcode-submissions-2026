class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(n).fill(1);

        let leftTracker  = 1;
        let rightTracker = 1;

        for(let i = 0; i < n; i++){
            res[i] = res[i] * leftTracker;
            leftTracker = leftTracker * nums[i];

            let rightIndex = n - 1 - i;
            res[rightIndex] = res[rightIndex] * rightTracker;
            rightTracker = rightTracker * nums[rightIndex]; 
        }

        return res;
    }
}
