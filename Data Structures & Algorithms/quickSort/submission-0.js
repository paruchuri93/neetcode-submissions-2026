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
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length - 1)
        return pairs
    }

    quickSortHelper(arr, s, e) {
        if(s >= e ) return 

        let pivot = arr[e]
        let pivotInd = s

        for(let i = s; i < e; i++){
            if(arr[i].key < pivot.key){
                [arr[i], arr[pivotInd]] = [arr[pivotInd], arr[i]]
                pivotInd++
            }
        }

        [arr[pivotInd], arr[e]] = [arr[e], arr[pivotInd]]

        this.quickSortHelper(arr, s, pivotInd - 1)
        this.quickSortHelper(arr, pivotInd + 1, e)
    }
}
