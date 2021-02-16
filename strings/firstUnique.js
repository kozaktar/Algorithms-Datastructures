/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const letterMap=new Map();
    let entryVal=null;
    
    for(let i=0;i<s.length;i++){
        if(letterMap.has(s[i])){
            entryVal=letterMap.get(s[i]);
            letterMap.set(s[i], entryVal+1);
        }
        else
            letterMap.set(s[i], 1);
    }
    
    console.log(letterMap);
    
    for(const [key, value] of letterMap){
        if(value===1)
            return s.indexOf(key);
    }
    return -1
    
};