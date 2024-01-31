// Task 1
// step 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log("Input: ",colors);
let reverse = [];
for(let i=0; i<colors.length; i++){
    reverse.unshift(colors[i]);
}
console.log("Output: ",reverse);
// step 2
let reversed = [];
const colorss = ['red', 'blue', 'green', 'yellow', 'orange'];
for(let i = colorss.length - 1; i >= 0; i--){
    reversed.push(colorss[i]);
}
console.log("Output: ",reversed);


// Task 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log("Input: ",numbers);
let evenNumbers = [];
for(let i=0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log("Output: ",evenNumbers);
const count = evenNumbers.length;
console.log("The Number of even numbers:",count);

// Task 3
let empty = '';
var strings = ['Tom', 'Tim', 'Tin', 'Tik'];
console.log("Input: ",strings)
for(let i=0; i < strings.length; i++){
     empty = empty + strings[i];
}
console.log("Output",empty);


// Task 4
// step 1 
const strings2 = 'I am a hard working person';
console.log("Input: ",strings2);
let words = strings2.split(' ');
let reversedString = '';
for( const word of words){
    reversedString = word + ' ' + reversedString;
}
console.log("Output: ",reversedString);

// step 2
let reversedString2 = strings2.split(' ').reverse().join(' ')
console.log("Output: ",reversedString2);