class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let count = 0;
        let sign = 0;
        let res = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                count = sign === -1 ? count + 1 : 1;
                sign = 1;
            } else if (arr[i] < arr[i + 1]) {
                count = sign === 1 ? count + 1 : 1;
                sign = -1;
            } else {
                count = 0;
                sign = 0;
            }

            res = Math.max(res, count);
        }

        return res + 1;
    }
}
