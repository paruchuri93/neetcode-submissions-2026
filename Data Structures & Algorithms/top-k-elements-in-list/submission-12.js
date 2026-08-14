class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        for(let i of nums){
            counts[i] = (counts[i] || 0) + 1;
        }

        const buckets = new Array(nums.length + 1).fill(0).map(()=>[]);

        for(let n in counts) {
            buckets[counts[n]].push(n);
        }

        let res = [];
        for(let i = nums.length; i >= 0; i--) {
            for(let b of buckets[i]){
                res.push(Number(b));
                if(res.length === k){
                    return res;
                }
            }
        }

        return res;
    }
}
