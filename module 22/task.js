// Task 1 
const heights2 = [167, 190, 120, 165, 137];

function getLowest(array){
    let lowest = array[0];
    for(const num of array){
    
        if(num < lowest ){
            lowest = num;
        }
    }
    return lowest;
}

const lowestNumber = getLowest(heights2);
console.log(lowestNumber);




// Task 2
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function lowestName(array){
    let min = array[0];
    for(const friend of array){
        
        if(friend.length < min.length){
            min = friend;
        }
    }
    return min;
}

const lowestNamedFriend = lowestName(friends);
console.log(lowestNamedFriend);




// Task 3 
function calculateElectronicsBudget(laptop, tablets, mobile){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    
    const laptopTotal = laptop*laptopPrice;
    const tabletTotal = tablets*tabletPrice;
    const mobileTotal = mobile*mobilePrice;

    totalMoneyRequired = laptopTotal + tabletTotal + mobileTotal;
    return totalMoneyRequired;
}

const total = calculateElectronicsBudget( 20, 10, 5);
console.log("Total Money Required: ",total);




// Task 4 
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(array){
    let prices = [];
    let total = 0;
for(const phone of array){
    prices.push(phone.price);
   total = total + phone.price;
}
 const size = prices.length;
 console.log(size);
 const avg = total/size;
 return avg;
}

const averagePrice = findAveragePhonePrice(phones).toFixed(2);
console.log("The average price of the phones is: ",parseFloat(averagePrice));




// Task 5 
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function totalSalary(employees){
    let newSalaries = []
    let totalSalary = 0;
for(const employee of employees){
    const salary = employee.starting + employee.increment*employee.experience;
    newSalaries.push(salary);
    totalSalary = totalSalary + salary;
}
console.log("The updated Salaries: ",newSalaries);
return totalSalary;
}
const companyProvided = totalSalary(employees);
console.log("Total Salary Provided by the Company: ",companyProvided)