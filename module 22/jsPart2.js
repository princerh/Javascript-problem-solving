function getMax(num1, num2){
if(num1 > num2)
{
    return num1;
}
else{
    return num2;
}
}

const max1 = getMax(30,25);
const max2 = getMax(72, 96);
const ultimateMax = getMax(max1, max2);
console.log(ultimateMax);

const jim = 85;
const kim = 76;
const tim = 90;

function getThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const biggest = getThree(jim, kim, tim);
console.log(biggest);

// shortcut 
const max = Math.max(12, 90, 96, 77);
console.log(max);


// Find the max number in an Array 
const height = [50, 34, 20, 56, 76, 67, 54, 76, 66, 76, 70, 55, 62, 56, 50]

function tallest(numbers){
    let max = numbers[7];
    let count = 0;
    for(const num of numbers){
        if(num > max){
            max = num;
        }
        if(num === max){
            count++;
        }
    }
    
    console.log('the max number appear', count," times");
    return max;
}
const tall = tallest(height);
console.log("The tallest girl is: ",tall);

const phones = [
    { name: 'Samsung', price: 20000, camera: '12 mp', color: 'black'},
    { name: 'Xiomi', price: 18000, camera: '12 mp', color: 'black'},
    { name: 'Oppo', price: 20000, camera: '12 mp', color: 'black'},
    { name: 'Iphone', price: 50000, camera: '12 mp', color: 'black'},
    { name: 'Walton', price: 15000, camera: '12 mp', color: 'black'}
]

function getCheapestPhone(phones){
    let min = phones[4];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
cheap = getCheapestPhone(phones);
console.log("The Cheapest phone is: ", cheap);



const products = [
    { name: 'Shampoo', price: 40, quantity: 12 },
    { name: 'Chironi', price: 200, quantity: 3 },
    { name: 'Gamcha', price: 100, quantity: 5 }
]
function getTotal(products){
    let total = 0;
    let min = products[2]
    for(const product of products){
    const thisProductPrice = product.price*product.quantity;
    total = total + thisProductPrice;
    if(thisProductPrice < min.price*min.quantity){
        min = product;
    }
}
console.log("Total poisha gelo: ",total)
return min;
}

const komTakaJabe = getTotal(products);
console.log(komTakaJabe);

// Layered Discount
function discountPricing(quantity){
    const first100Price = 100;
    const second100Price = 80;
    const remainingPrice = 50;

    if(quantity<=100){
       const total = first100Price*quantity;
        return total;
    }
    else if(quantity<=200){
       const first100Total = first100Price*100;
       const remainingPrice = (quantity-100)*second100Price;
       const total = first100Total + remainingPrice;
       return total;
    }
    else{
        const first100Total = first100Price*100;
        const second100Total = second100Price*100;
       const remainingPrice = (quantity-200)*second100Price;
       const total = first100Total + second100Total + remainingPrice;
       return total;
    }
}

const totalDiscount = discountPricing(130);
console.log(totalDiscount);

// Calculator 
function add (num1, num2){
return num1 + num2;
}
function subtract (num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}

function calculator(num1, num2, operation){
    if(operation === 'add'){
        return add(num1, num2);
    }
    else if(operation === 'subtract'){
        return subtract(num1, num2);
    }

    else if(operation === 'multiply'){
        return multiply(num1, num2);
    }

    else if(operation === 'divide'){
        return divide(num1, num2);
    }
    else {
        console.log("only add, subtract, multiply and division is possible");
    }
}

const result = calculator(10, 5, 'divide');
console.log(result);



// important for name verification 
function fulName(first , last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return "please provide a string";
    }
    const fullname = first + ' ' + last;
    return fullname;
}

const ful = fulName('Rakibul', 'Akash');
console.log(ful);


function getSecond(numbers){
    return typeof numbers;
}
console.log(getSecond([1, 2,3, 4,5]));  //but array k object boltese, array is one kind of object;


// array k array e show korte chaile 
function geetSecond(numberss){
    console.log(Array.isArray(numberss))  //true mane array e
}
console.log(geetSecond([1, 2,3, 4,5])); 

console.log(typeof null); // Output: 'object'
