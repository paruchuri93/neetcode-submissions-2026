/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length <= 1) return pairs;
        let m = Math.floor(pairs.length / 2);
        let left = this.mergeSort(pairs.slice(0, m));
        let right = this.mergeSort(pairs.slice(m));

        return this.merge(left, right);
    };

    merge(leftArray, rightArray) {
        let arr = [];

        let l = 0;
        let r = 0;

        while (l < leftArray.length && r < rightArray.length) {
            if (leftArray[l].key > rightArray[r].key) {
                arr.push(rightArray[r]);
                r += 1;
            } else {
                arr.push(leftArray[l]);
                l += 1;
            }
        }

        while (l < leftArray.length) {
            arr.push(leftArray[l]);
            l += 1;
        }
        while (r < rightArray.length) {
            arr.push(rightArray[r]);
            r += 1;
        }

        return arr;
    };


}
