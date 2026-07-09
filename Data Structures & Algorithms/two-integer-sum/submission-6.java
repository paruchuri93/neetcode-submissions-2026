class Solution {
    public int[] twoSum(int[] nums, int target) {
        int i = 0;
        

        while(i < nums.length) {
            int j = i + 1;
            while(j < nums.length){
                int compliment = target - nums[j];
                if(nums[i] == compliment){
                    return new int[] {i, j};
                }
                j +=1;  
            }
            i+=1;
        }

        return new int[]{};
        
    }
}
