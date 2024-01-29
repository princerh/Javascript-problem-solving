var cg = 3.28456603;
console.log(cg);
var convert = cg.toFixed(2);
console.log(convert)
var num = parseFloat(convert)
console.log(num)


var hour = 21;
if(hour>6 && hour< 12)
{
    console.log("good morning")
}
else if(hour > 12 && hour < 18){
    console.log("good afternoon")
}
else{
    console.log("good night")
}

// compares only value 
console.log(10=="10")  

// compares value and data type also 
console.log(10==="10")

var fullName = ["Reazul", "Hasan", "Prince"];
console.log(fullName);

console.log(fullName[1]);

fullName[1] = "Ahsan";
console.log(fullName);

var numbers = [1, 2, 3, 4 ,5 , 6, 7];
console.log(numbers);
numbers.push(8,9,10,11);
console.log(numbers);
numbers.pop();
console.log(numbers);

var popped = numbers.pop();
console.log(numbers);
console.log(popped);

numbers.unshift(10, 20);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(numbers.indexOf(2));
console.log(numbers.indexOf(9));
console.log(numbers.indexOf(30));

console.log(numbers.length);
console.log(numbers.length-1);

// slice(kon index theke shuru, kon index er age porjnto)
console.log(numbers.slice(1,9));
// slice a sudhu akta parameter thakle oikhane theke last porjnto shob dibe 
console.log(numbers.slice(8));

// Splice (kon index theke shuru hobe , koita num delete korben)
console.log(numbers);
console.log(numbers.splice(2,1));
console.log(numbers);

console.log(numbers);
console.log(numbers.splice(2,3));
console.log(numbers);

// Splice (kon index theke shuru hobe , koita num delete korben, oi index er jaigai ki ki element add korte chai - element1, element2 ....


console.log(numbers);
console.log(numbers.splice(2,0,3,4,5));
console.log(numbers);
