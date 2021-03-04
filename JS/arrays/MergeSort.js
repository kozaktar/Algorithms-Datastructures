// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2

/* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/

//since we have to do this in place we have to add elements to the end of the final array (n+m) also we have to itterate from the end of nums1 and nums2 since we're adding largest numbers first
var merge = function(nums1, m, nums2, n) {
        //using two finger method O(N)
        let i = m-1; // length of nums1 array
        let j = n-1; //length of nums2 array
        let k = n+m-1; //final length of the sorted array

        //while array indexes of nums1 or nums2 have not reached 0
        while(i>=0 || j>=0){
            //if there are no unmerged elements remaining in array1, but there are still unmerged elements in array2 keep adding elements from array2 to array1  
            if(i<0){
                nums1[k--]=nums2[j--];    
            }
            //if there are no unmerged elements remaining in array1, but there are still unmerged elements in array1 keep shifting elements from array1 to array1 begining
            else if(j<0){
                nums1[k--]=nums1[i--];    
            }
            //if nums1[i] is more than or equal to nums2 add it to the front of growing array
            else if(nums1[i]>=nums2[j]){
                nums1[k--]=nums1[i--];
            }
             //if nums1[i] is less than nums1 add it to the front of growing array
            else if(nums1[i]<nums2[j]){
                nums1[k--]=nums2[j--];
            }
        }
    };