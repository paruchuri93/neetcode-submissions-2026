class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let numOfSubArray = 0;
        let curr = 0;

        for (let i = 0; i < k; i++) {
            curr += arr[i];
        }
        if (curr / k >= threshold) {
            numOfSubArray += 1;
        }

        for (let i = k; i < arr.length; i++) {
            curr = curr + arr[i] - arr[i-k];
            if(curr/k >= threshold){
                numOfSubArray += 1;
            }
        }

        return numOfSubArray;
    }
}
