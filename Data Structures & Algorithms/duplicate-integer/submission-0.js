class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashmap = {}
        for(let i=0;i<=nums.length;i++){
            if(hashmap[nums[i]]){
                return true
            }else{
                hashmap[nums[i]] = true
            }
        }
        return false;
    }
}
