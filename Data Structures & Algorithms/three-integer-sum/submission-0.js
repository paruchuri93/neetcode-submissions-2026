class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                let target = nums[i] + nums[l] + nums[r];
                if (target === 0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (target < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return res;
    }
}