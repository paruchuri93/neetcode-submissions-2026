class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let speed = 1;

        while(l<=r){
            let mid = Math.floor((l + r)/2);
            let avgSpeed = piles.reduce(
                (acc, val)=> Math.ceil(val/mid) + acc, 0
            )
            if(avgSpeed <= h){
                speed = mid;
                r = mid - 1; 
            } else{
                l = mid + 1
            }
        }

        return speed
    }
}
