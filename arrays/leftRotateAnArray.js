 //a is an array d is the number of left rotations
//  A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.    
function rotLeft(a, d) {
    if(a.length<2)
        return a;
        
    const arr=a;
    let shiftMember=null;
    for(let i=0; i<d; i++){
        shiftMember=arr.shift();
        arr.push(shiftMember);
    }
    
    return arr;
}