class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(0, nums.length -1, nums, target);
    }

    binarySearch(left, right, nums, target){
        if(left > right) {
            return -1;
        }

        let mid = left + Math.floor((right - left)/2);

        if(nums[mid] === target) {
            return mid;
        }

        if(nums[mid] < target) {
            return this.binarySearch(mid+1, right, nums, target);
        }

        if(nums[mid] > target){
            return this.binarySearch(left, mid - 1 ,nums, target);
        }

    }
}
