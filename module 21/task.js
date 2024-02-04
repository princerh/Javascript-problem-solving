// Task 1 
function convertTemparature(celcius){
    const F = (9/5)*celcius + 32;
    return F;
}
const Farenhit = convertTemparature(36.4);
console.log(Farenhit,"Degree");

// Task 2 
function find(values, num){
    let count = 0;
  for(const val of values)
  {
    if(val === num){
        count++
    }
}
console.log("Finding",num);
console.log(count);
}
const numbers = [5,6,11,12,98, 5];
find(numbers, 25);


// Task 3 
function vowels(string){
    let counti =0;
for(const str of string){
    if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
        counti++;
    }
    
}
console.log(counti);
// return counti;
}
vowels("dddddeeeaaaooou");


// Task 4 
function longest(speech){
   const words = speech.split(" ");
   let maxlength = 0;
   let maxword = " "
   for(const word of words){
    if(word.length > maxlength){
        maxlength = word.length
        maxword = word;
    }
   }
   console.log("The longest word is: ", maxword);
   console.log("Size of the maxword is: ", maxlength);
}
let sample = "I am learning Programming to become a programmer";
longest(sample)


// Task 5 
const rand = Math.random()*11 + 10;
console.log(Math.floor(rand));
