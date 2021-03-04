/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
    let mostFrequentCount=0;
    let mostFrequentWord=null;
    
    //1. change paragraph to lowercase
       const ans= paragraph.toLowerCase();
    //2. make a hash table of frequencies of words
        const wordCount={};
    //2.1 remove any punctuation from paragraph
        const ansArr= ans.split(/[\s!?',;.]+/);
        ansArr.forEach(word=>{
            if(!banned.includes(word)){
                if(word in wordCount){
                    wordCount[word] = wordCount[word]+1;
                }
                else
                    wordCount[word] =1;
            }
        })
    //3. find most frequent word
    for(const property in wordCount){
        if(wordCount[property]>mostFrequentCount){
            mostFrequentWord=property;
            mostFrequentCount=wordCount[property];
        }
    }
    
    return mostFrequentWord;
};