// step 1 
const friends = ['Elon', 'Bill', 'Mark', 'Waren'];
console.log(friends);
friends.reverse();
console.log(friends);

// step 2
const friends2 = ['Elon', 'Bill', 'Mark', 'Waren'];
let reversed = [];
for(const friend of friends2){
  reversed.unshift(friend);
}
console.log(reversed);

// step 3
const friends3 = ['Elon', 'Bill', 'Mark', 'Waren'];
let reversed2 = [];
for(let i = 0; i < friends3.length; i++){
    reversed2.unshift(friends3[i]);
}
console.log(reversed2);

// step 4
let reversed4 = [];
for(let i = friends3.length - 1; i >= 0; i--){
   let add = friends3[i];
    reversed4.push(add);
}
console.log(reversed4);