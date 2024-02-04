// duplicate value removing in array and ascending sorted

function removeDuplicate(array) {
    const oneValue = [];
    for(const item of array){
        if(oneValue.includes(item) === false){
            oneValue.push(item);
        }
    }
    return oneValue;

}
const Number = [23, 34, 23, 2, 5, 77, 12, 7, 5, 34];
const result = removeDuplicate(Number)
const sorted = result.sort(function(a,b){
    return a - b;
})
console.log(sorted);

function oddNumberavg(oarray){
    let osum = 0;
    const oddNum = [];
    for(const item of oarray){
  if(item % 2 === 1){
    osum = osum + item;
    oddNum.push(item);
  }
    }
    console.log("The total sum of odd number is: ", osum);
    console.log("The total sum of odd number is: ", oddNum);
    const size = oddNum.length;
    const avg = osum/size;
    console.log("The average of odd number is: ",avg);
}
oddNumberavg(sorted);
// console.log(totalOsum);