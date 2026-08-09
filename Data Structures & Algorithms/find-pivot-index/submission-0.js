class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const total = nums.reduce((acc, v) => acc + v, 0);
        let leftSum = 0;

        for (let i = 0; i < nums.length; i++) {
            let rightTotal = total - nums[i] - leftSum;
            if (leftSum === rightTotal) {
                return i;
            }
            leftSum += nums[i];
        }

        return -1;
    }
}
