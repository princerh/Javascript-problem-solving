function details(info){
if(typeof info != 'object'){
    return "thik thak object de"
}
else if(!info.name || info.Age == undefined){
    return "object a name r age duitai lagbe"
}
else if( typeof info.name !== 'string' || typeof info.Age !== 'number'){
     return "name a string and age a number de"
    }
else if(info.Age <= 0){
    return "age should be positive number"
}
 
// return info.name + " " + info.Age;
return `my name is: ${info.name}. I am ${info.Age} years old`
}
console.log(details({name: "prince"}))



const statement =  "I am a hard working person";
 let final = statement.split( " ");
 let finalString = final.reverse()
 let joinString = finalString.join(" ")

 console.log(joinString);


 
// Conceptual session 
 function findLargest(values){
    if(!Array.isArray(values)){ //check korbe array kina, array na hoile akhane dhukbe
        return "provide an array";
    } 
    else{
        let max = values[0];
        for(let i=1; i< values.length; i++){ // i er man 1 theke dhorleo shuru tei max ta peye gese.. 
            if(typeof values[i] !== 'number'){
                return "each value should be a number";
            }else{
                if(values[i]> max){
                    max = values[i];
                }
            }
        }
        return max;
    }
 }
 const numbers = [97, 34, 23, 32, 53, 92, 39, 12, 31, 75 ]
 const largest = findLargest(numbers);
 console.log(largest);




//  problem 1 
 function AnaToVori(Ana){
    if(typeof Ana !== 'number' || Ana < 0){
        return "Please provide a valid integer number";
    }
    else{
        const Vori = Ana * 0.0625;
        return Vori;
    }
 }
 console.log(AnaToVori(22));




//  problem 2
function pandaCost(singara, samucha, jilapi){
    if(typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number'){
        return "please provide a valid integer number"
    }
    else if(samucha < 0 || singara < 0 || jilapi < 0){
        return "all parameters should be positive"
    }
    
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    const total = (singara*singaraPrice) + (samucha*samuchaPrice) + (jilapi*jilapiPrice);
    return total;
}
console.log(pandaCost(1,2,-5))




// problem 3 
function picnicBudget(participants){
    if(typeof participants !== 'number' || participants < 0){
        return "participants should be valid number";
    }
     let first100Cost = 0;
     let second101to200Cost = 0;
     let remainingCost = 0;
     let totalCost = 0;

     if(participants <=100){
        first100Cost = participants*500;
        return first100Cost;
     }
     else if(participants <=200){
        first100Cost = 5000*100;
        second101to200Cost = (participants - 100)*4000;
        totalCost = first100Cost + second101to200Cost;
        return totalCost;
     }
     else{
        first100Cost = 5000*100;
        second101to200Cost = 100*4000;
        remainingCost = (participants -200)*3000;
        totalCost = first100Cost + second101to200Cost + remainingCost;
        return totalCost;
     }
}
console.log(picnicBudget(-102))