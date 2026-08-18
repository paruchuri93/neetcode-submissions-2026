class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = new Array(arr.length);
        let maxRight = -1;
        for (let i = result.length - 1; i >= 0; i--) {
            result[i] = maxRight;
            maxRight = Math.max(maxRight, arr[i]);
        }

        return result;
    }
}
