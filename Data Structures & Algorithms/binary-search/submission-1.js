class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0
        let right = nums.length
        while(left < right){
        let middle = Math.floor((left + right) / 2)
        if(nums[middle]===target) return middle
            if(target<nums[middle]){
             right = middle   
            }
            else{
                left = middle +1
            }
        }
        return -1
    }
}
