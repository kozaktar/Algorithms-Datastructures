/**
 * @param {string} s
 * @return {number}
 */
//time complexity= O(n) space complexity=O(1)
var firstUniqChar = function(s) {
    const letterMap=new Map();
    let entryVal=null;
    
    //O(n)
    for(let i=0;i<s.length;i++){
        if(letterMap.has(s[i])){
            entryVal=letterMap.get(s[i]);
            letterMap.set(s[i], entryVal+1);
        }
        else
            letterMap.set(s[i], 1);
    }
    
    //O(1) max 28
    for(const [key, value] of letterMap){
        if(value===1)
            //O(n)
            return s.indexOf(key);
    }
    return -1
    
};