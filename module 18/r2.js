// finding in array 
const fruits = ['Apple', 'Banana', 'Coconut', 'Grape', 'Mango'];
let foundIndex = -1;
let target = ' '; //set a name to find it
for(let i= 0; i<fruits.length; i++){
    if(fruits[i] === target){
        foundIndex = i;
    }
}
if(foundIndex > -1){
    console.log(foundIndex, "founded");
}
else{
    console.log("Not founded");
}



// Finding max and min number in array

const nums3 = [23, 34, 12, 45, 76, 1, 54, 27, 87, 82,  67];
let maxNumber = nums3[0];
let minNumber = nums3[0];
for(let i = 0; i<nums3.length; i++){
    if(maxNumber < nums3[i]){
        maxNumber = nums3[i];
    }
    if(minNumber>nums3[i]){
        minNumber = nums3[i];
    }
}
console.log("The maximum number is: ", maxNumber);
console.log("The minimum number is: ", minNumber);
