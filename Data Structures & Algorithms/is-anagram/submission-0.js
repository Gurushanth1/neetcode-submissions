class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){return false}
        const hashmap={}
        for (let i=0;i<=s.length;i++){
            hashmap[s[i]] = ( hashmap[s[i]] || 0 ) +1
            hashmap[t[i]] = ( hashmap[t[i]] || 0 ) -1
        }
        return Object.values(hashmap).every((item)=>item===0)
    }
}
