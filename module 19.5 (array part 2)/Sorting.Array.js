const names = ['akib', 'rokib', 'mokib', 'sakib', 'fakib', 'zakib', 'Pakib', 'Dokib'];
names.sort();
console.log(names);

// js number keo string er mto sorting kore 
numbers = [2, 34, 3, 4, 42, 8, 77, 9];
[...numbers].sort();   // aita korle numbers change hobe na, agertai thakbe.
console.log(numbers);
// so javascript number keo ulta palta sorting kortese 

// ascending 
numbers.sort(function(a,b){return a - b;});
console.log(numbers);

// descending
numbers.sort(function(a,b){return b - a;});
console.log(numbers);
