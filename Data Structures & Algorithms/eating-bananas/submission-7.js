class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let speed = r;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            const total = piles.reduce((a, v) => Math.ceil(v / mid) + a, 0);
            if(total<=h){
                speed = mid;
                r = mid - 1
            } else{
                l = mid+1
            }
        }
        return speed
    }
}
