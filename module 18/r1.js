// array reverse 
const names = ['Prince', 'Dhrubo', 'Habib', 'Fatema', 'Limon'];
for(let i=names.length; i>=0; i--){
    console.log(names[i]);
}


// array values sum 
let sum =0;
const nums = [10, 20, 30, 40, 50];
for(let i = 0; i<nums.length; i++){
    sum = sum + nums[i];
    console.log("Till now: ", sum);
}
console.log("Total: ", sum);



// swapping 
const nums2 = [10, 20, 30, 40, 50, 60];
for(let i = 0; i< nums2.length/2; i++){
   let temp = nums2[i];
   nums2[i] = nums2[nums2.length-(i+1)];
   nums2[nums2.length-(i+1)] = temp;
}
console.log(nums2);
