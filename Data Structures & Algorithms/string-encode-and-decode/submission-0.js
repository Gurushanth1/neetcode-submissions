class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
     encode(strs) {
        let res = "";
        strs.forEach((str)=>{
            res = res + `${str.length}`+str
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
        while(index <=str.length){
            let wordCount = str[index];
            if(!wordCount) break;
            index++;
            let word =""
            while(wordCount > 0){
                word+=str[index]
                --wordCount;
                ++index;
            }
            res.push(word)
        }
        return res
    }
}
