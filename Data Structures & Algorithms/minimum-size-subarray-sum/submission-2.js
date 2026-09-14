class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let minLen = Infinity;
        let curr = 0;

        for (let right = 0; right < nums.length; right++) {
            curr+=nums[right];

            while(curr>= target){
                minLen = Math.min(minLen, right -left +1);
                curr-=nums[left];
                left++
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}