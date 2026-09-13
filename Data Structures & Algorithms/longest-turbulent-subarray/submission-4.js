class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let r = 1;
        let sign = 0;
        let count = 1;
        let res = 1;

        while (r < arr.length) {
            if (arr[r - 1] < arr[r]) {
                count = sign === -1 ? count + 1 : 2;
                sign = 1;
            } else if (arr[r - 1] > arr[r]) {
                count = sign === 1 ? count + 1 : 2;
                sign = -1;
            } else {
                count = 1;
                sign = 0;
            }

            r++;
            res = Math.max(res, count);
        }

        return res;
    }
}
