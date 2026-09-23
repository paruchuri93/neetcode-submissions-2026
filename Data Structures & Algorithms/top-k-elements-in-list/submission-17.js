class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let n of nums) freq[n] = (freq[n] || 0) + 1;

        const sortedFreq = new Array(nums.length + 1).fill(0).map(() => []);
        for (let n in freq) sortedFreq[freq[n]].push(Number(n));

        const res = [];
        for (let i = nums.length; i >= 0; i--) {
            for (let n of sortedFreq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}