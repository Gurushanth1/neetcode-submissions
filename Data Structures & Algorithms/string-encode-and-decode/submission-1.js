class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
     encode(strs) {
        let res = "";
        strs.forEach((str)=>{
            res = res + `${str.length}#`+str
        })
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
     decode(str) {
        let index = 0
        const res =[]
        while(index < str.length){
            let subIndex = index
            while(str[subIndex] !== '#'){
                subIndex++
            }
            let wordLength = parseInt(str.slice(index,subIndex))
            let removedHashIndex = subIndex+1
            res.push(str.slice(removedHashIndex,removedHashIndex+wordLength))
            index = removedHashIndex+wordLength
        }
    
        return res
    }
}
