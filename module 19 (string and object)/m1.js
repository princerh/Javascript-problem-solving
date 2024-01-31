const name = "Prince";

name[1] = "G";
console.log(name);
// not Changed because string is immutable means not changeable. but array is mutable. you can change. 


// string case ak e na hole condition match kore na. onksomoy user akek vabe lekhe tai login hoy na. 
 const subject = "physics";
 const pass = "Physics";
 if(subject.toLowerCase() === pass.toLowerCase())
 {
    console.log("you have passed");
 }
 else{
    console.log("You have failed");
 }

//  onk somoy user space diye dey extra . space dile string same thake na 
const water = "coke";
 const drinks = "  coke";
 if(water.trim().toLowerCase() === drinks.trim().toLowerCase())
 {
    console.log("Thank you brother");
 }
 else{
    console.log("Shor halarpo.. ");
 }


//  string jekono onghso niye kaj kora 
 const address = 'andorkilla';
 const part = address.slice(2,5);
 console.log(part);


 const sentence = "i am good and hardworking person";
 console.log(sentence.split(''));
//  white space ' ' dile string a space pelei vag kore dbe 
//  a jekhane pabe sekhane vag kore dibe
 console.log(sentence.split('a'));

 const friends = 'Rahim, karim, morim, jarim, lorim';
 console.log(friends.split(','));

 const realFriends = ['Rahim', ' karim', ' morim', ' jarim', ' lorim'];
 console.log(realFriends);
// array chara alada comma diye dkhate Chaile 
console.log(realFriends.join());

console.log(realFriends.join(' -'));

// duita string ke jora dite chaile
const first = 'Riazul';
const Last = 'Hasan'; 
const fullName = first + ' ' + Last;
console.log(fullName);

// aitai alternatively kora jay 
const fullName2 = first.concat(Last);
console.log(fullName2);


// string a kono letter ase kina check korte chaile 
console.log(Last.includes('d'));
console.log(Last.includes('s'));

const sentence2 = 'I am learning web dev';
let reverse = ''
for(const letter of sentence2)
{
   reverse = letter + reverse;
}
console.log(reverse);

let rev = '';
for(let i = 0; i<sentence2.length; i++)
{
    console.log(i);
    letter2 = sentence2[i];
    rev = letter2 + rev; 
     
}
console.log(rev);

// shortcut a reverse korte 
let reversed = sentence2.split('').reverse().join('');
console.log(reversed);

// Object declaration 
const person = {
    name: 'Riazul Hasan Prince',
    age: 25,
    profession: "Web developer",
    salary: 30000, 
    married: false
}

// dot diye object er property use Kora 
console.log(person.married , person.name);

const income = person.salary;
console.log(income);

// third bracket diye dkha 
console.log(person['age']);



// dot diye variable a space thakle acces kora jay name.. bracket diye kora jay 
person.salary = 80000;
console.log(person);
// dot and bracket diye value o chnage kora jay

//  sudhu object er man gula chaile 
const values = Object.values(person);
console.log(values);


const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }

}


console.log(college.unique.result.merit);
console.log(college.events[1]);


college.events[1] = '16 dec'
console.log(college.events);


// object er vitor kono property delete korte chaile 
console.log(college);
delete college.class;
console.log(college);

const mobile = {
    brand: 'samsung',
    price: 40000,
    color: 'blue',
    camera: '64mp',
    isNew: true
}
console.log(mobile);
const erVALUE = Object.values(mobile);
console.log(erVALUE);

let mobReverse = '';
for(const prop in mobile){
    mobReverse = prop + ' ' + mobReverse
    console.log(prop);
    
}
console.log(mobReverse);

// for loop a array  er jonn    | of | 
// for loop a object er jonno    | in | 


// value gulao for loop diye dkha jay 
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
    
}

 
// property gula dkhte chaile jeta array akare dibe 
const keys = Object.keys(mobile);
console.log(keys);

// aita akta Array, so aita ke of diye kora jabe 
for(const key of keys){
    console.log(key, ': ', mobile[key]);
}

// object aro vabe declare kora jay, chaile poreo property use kora jay 
const pen= {brand: 'econo', price: 10, color: 'black'}
console.log(pen);

const pencil = new Object();
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);



// Object.keys property gula dibe
// Object.values propertyr values gula dibe



// task 1 
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
};

console.log(colors['golden rod']);

// task 2
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
console.log(car);
car['passenger capacity'] = 5;
console.log(car);

// task 3
const student = {
    name: "riazul hasan",
    id: 3002,
    physics: {
        subject: "Hsc physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}
console.log(student.physics.marks);

// task 4
const retudent = {
    name: "riazul Hasan",
    age: 25,
    city: "Dhaka",
    isStudent: true
};
const counts = Object.keys(retudent).length;
console.log(counts);

// task 5 
for(const rey in retudent){
    console.log(rey, ": ", retudent[rey], " |", "type: ", typeof retudent[rey]);
}

// task 1
const task1 = "KFSODHUAPASAFaaaaaSDKSDFSDASKFASDHASFSDFSF";
console.log(task1.includes("A"));

// task 2 
let countKorbe = 0;
for(const i of task1){
    if(i === 'A' || i === 'a'){
        countKorbe++
    }
}
console.log(countKorbe);


// task 3 
let countKorben = 0;
for(const i of task1){
    if(i === 'A' || i === 'a' && i === 'E' || i === 'e' && i === 'I' || i === 'i' && i === 'O' || i === 'o' && i === 'U' || i === 'u' ){
        countKorben++
        console.log(" Yes, malta ase");
    }
}
console.log(countKorben);



let gg = "dlsfdg";
let mm = gg + 23;
console.log(typeof mm);

let str = "Mississippi";
console.log(str.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let prop in myObject) {
    console.log(myObject[prop]);
  }

  const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const strn = "Hello";
strn[0] = "h";
console.log(strn);


const task4 = "fox jumped on the boX.";
const varab = task4.replace('x', 'y').replace('X', 'Y')
console.log(varab);      


// task 5
const task5 = "Capitalize Every first Letter of each word";
const rakhlam = task5.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(rakhlam); // Output: "Capitalize Every First Letter Of Each Word"


// here   /\b\w/g indicates the first letter of each word 
function capitalizeEveryWord(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Example usage:
  var sentencee = "Capitalize Every first Letter of each word";
  var capitalizedSentence = capitalizeEveryWord(sentencee);
  console.log(capitalizedSentence); // Output: "Hello World"

  
