const transpose=(arr)=>{
    console.log(arr.length)
    if(!Array.isArray(arr)){
        throw new Error('Not an Array!')
    }

    const newArr=[];

    for(let i=0;i<arr.length;i++){
        newArr.push([])

        for(let j=0;j<arr.length;j++){
            newArr[i][j]=arr[j][i];
        }
    }


   return newArr
}

const symetric=(arr)=>{

    const arrTranspose=transpose(arr);
    for (let i = 0; i<arrTranspose.length; i++) {
        for(let j=0; j<arr.length; j++)
        if(!(arr[i][j]===arrTranspose[i][j])) {
            return false;
        }
    }

    return true;
}


//not symetric array
console.log(symetric([[1,2,3],[4,5,6],[7,8,9]]))

//symetric array
console.log(symetric([[1, 7, 3],[7,4,-5],[3,-5,6]]))