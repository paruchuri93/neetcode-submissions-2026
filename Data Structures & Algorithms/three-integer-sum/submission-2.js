class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                let target = nums[i] + nums[j] + nums[k];
                if (target === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;
                    j++;
                    k--;
                } else if (target < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return res;
    }
}
