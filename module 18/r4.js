const frequencyArray = [0,0,0,0,0,0,0,0,0,0];
const sampleNumber = '38237421230343246';
for(let i = 0; i < sampleNumber.length; i++){
   const currentdigit = sampleNumber[i];
   frequencyArray[currentdigit] = frequencyArray[currentdigit] + 1;

}
console.log("The updated values: " , frequencyArray);


let maxOccurence = frequencyArray[0];
let maxOccurenceIndex = 0;
for(let i=0; i<frequencyArray.length; i++){
    const current = frequencyArray[i];
    if(maxOccurence < current){
        maxOccurence = current;
        maxOccurenceIndex = i;
    }
    
}

console.log("highest number is at: ", maxOccurenceIndex, "The hightest number value is: ", maxOccurence);


// serial change 
const seiral = [22, 33, 44, 55, 66, 77, 88, 99];
const target = 77;
while(true){
    const firstElement = seiral[0];
    if(firstElement == target){
        break;
    }
    const extractFirstElement = seiral.shift();
    seiral.push(extractFirstElement);
}
console.log(seiral);
