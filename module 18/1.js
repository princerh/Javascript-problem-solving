const names = ['Rony', 'Prince', 'Akash', 'Happy'];
console.log(names);
for(name of names){
    console.log(name);
}

let num = 1
let sum = 0;
while(num <=10){
    console.log(num);
    sum = sum + num;
    console.log("till now total: ", sum);
    num+=1;
}
console.log("total: ", sum);



let time = 1;
while(time <=60){
    console.log("I will invest at least 6 hours");
    time++;
}

let mum = 0;
while(mum <=100){
    console.log(mum);
    if(mum%2 ===0){
        console.log("Even number ", mum);
    }
    mum++;
}


let dum = 0;
let mot = 1;
while(dum <= 10){
    console.log(dum);
    if(dum%2 !==0){
        mot = dum * mot;
    }
    dum++;
}



console.log("total sum ", mot);

for(let i =100; i >=0; i--){
    console.log(-i);
}

let j = 1;
let sumation = 0
while(j<=50){
    if(j%5===0 && j%10 === 0 && j%4 ===0)
    {
        sumation = sumation + j;
    }
    j++;
}
console.log(sumation);


let suma = 0;
for(let m=0; m<=200; m= m+3)
{

    suma = suma + m;
    console.log("Now: ", suma);
    console.log(m);
    if(suma >= 200){
        break;  //or use break
    }
    
}
console.log("Till now total is: ", suma);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}