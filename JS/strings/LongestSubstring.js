const longestSubstring=(string)=>{

    let startingIndex=0;
    let endingIndex=0;

    let tempStartingIndex=0;

    for(let i=0; i<string.length;i++){
        if(string[tempStartingIndex]===string[i]){
            if(i-tempStartingIndex>endingIndex-startingIndex){
                startingIndex=tempStartingIndex;
                endingIndex=i;
            }
        }
        else{
            tempStartingIndex=i;
        }
    }

    return string
}

console.log(longestSubstring('abcd'))