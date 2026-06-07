class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
        const freq = {};
        const res = []
        for(let item of nums){
            freq[item] = (freq[item] || 0) + 1
        }
        let countarr = new Array(nums.length+1).fill(0).map(()=>[])
       

        for(let item in freq){
            console.log(item);
            console.log(freq[item]);
            countarr[freq[item]].push(item)
        }
        for (let i = countarr.length - 1; i >= 0 && res.length < k; i--) {
            if (countarr[i].length > 0) {
                res.push(...countarr[i]);
            }
        }
        return res 
    }
}
