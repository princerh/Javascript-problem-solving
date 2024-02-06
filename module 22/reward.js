// problem 1 
function codeNumber(number){
    if(typeof number !== 'number'){
        return "please type a number";
    }
    // alternative 
    // const result = Math.pow(number,3);
    const result = number**3;
    return result;
}
const result = codeNumber(4);
console.log(result);



// Problem 2 
function matchFinder(string1, string2){
if(typeof string1 !== 'string' || typeof string2 !== 'string'){
    return "Please provide string in both input";
}

const result = string1.includes(string2);
return result;

// alternative 
/* if(string1.includes(string2)){
    return true;
}
else {
    return false;
} */

}
console.log(matchFinder("John Doe", "ohn"));




// problem 3
function sortMaker(array){
    
    const [a, b] = array;
    if(a<0 || b<0){return "invalid input";}
    if(a===b){return "equal";}
    if(a>b){return [b,a];}
    else{return [a,b];}

    // alternative 1 
    /* if(array[0]<0 || array[1]<0){
        return "invalid input";
    }

    else if(array[0] === array[1]){
        return "equal";
    }

    else if(array[0] < array[1]){
        const temp = array[0];
        array[0] = array[1];
        array[1] = temp;
        return array;
    }
    else{
        return array;
    } */



    // alternative 2
    /* if(array[0] < 0 || array[1]<0){return "invalid input";}
    if(array[0] === array[1]){return "equal";}
    const res = array.sort(function(a,b){return b - a;})
    return res; */
}
console.log(sortMaker([3, 7]));




// problem 4
function findAddress(object){

const street = object.street || "__";
const house = object.house || "__";
const society = object.society || "__";

const str = street + "," + house + "," + society;
return str;

    // alternative 
    /* let street = object.street;
    let house = object.house;
    let society = object.society;
    if(street){street} else{ street = "__"}
    if(house){house} else{ house = "__"}
    if(society){society} else{ society = "__"}

    const sum = street  +',' + house +',' + society;
    return sum; */
}
console.log(findAddress({street: 10}))




// problem 5 
function canPay(array, number){
    const size = array.length
    if(size === 0){
        return "please input an array"}

    let sum = 0;
    for(const item of array){
        sum = sum + item;
    }
    if(sum>=number){
        return true;
    }
    else {
        return false;
    }
}
console.log(canPay([],10));

for (let i = 2; i <= 100; i++) {
    // Check if the square root of the current number is an integer
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("Encountered the first square number:", i);
        break; // Stop the loop when the first square number is found
    }
}
for(let i = 2; i<=100; i++){
    if(i*i <=100) {console.log(i); break;}
}

const friends = ["Reazul", "Hasan", "Prince", "peal", "Shakil", "udoy"]
function propertyCount(friends){
    let count = 0;
    let min = friends[0];
    let smallfriend = [];
    for(const friend of friends){
        if(friend.length < min.length){
            min = friend;
        }
    }
    
    for(const friend of friends){
        if(friend.length === min.length){
            smallfriend.push(friend);
        }
    }
    console.log(smallfriend);
}

propertyCount(friends)