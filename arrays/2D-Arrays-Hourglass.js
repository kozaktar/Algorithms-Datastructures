// Complete the hourglassSum function below.
function hourglassSum(arr) {
    //set max balue to negative infinity
    let maxValue=Number.NEGATIVE_INFINITY;
    //current value of hour glass sum
    let hourGlassVal=null;
    
    //iterate through all elements of the array that allow for hour glass sum to be calculated
    for(let i=0; i<arr.length-2;i++){
        for(let j=0; j<arr[0].length-2;j++){
            //get hour glass sum of array elements starting at current position
            hourGlassVal=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            //get max between current sum and maxValue sum and assign the result to maxValue
            maxValue=Math.max(maxValue, hourGlassVal);
        }
    }
    //return max sum
    return maxValue;
}