class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const majority = nums.length / 2;
        const counts = {};
        let ans = 0;

        for(let n of nums){
            if(counts[n]){
                counts[n]+=1
            } else {
                counts[n] = 1;
            }
        }

        for(let k in counts){
            if(counts[k] >= majority){
                ans = k
            }
        }

        return ans;
    }
}
