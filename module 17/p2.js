
// BMI calculator and suggestion 

var height = 1.67;
var weight = 60;

var BMI;
BMI = weight/height**2;
console.log(BMI);

if(BMI < 18.5){
    console.log("you are underweight");
}
else{ 
    if(BMI <= 24.9){
     console.log("you are normal");
    }
    else if(BMI <= 29.9){
        console.log("you are overweight");
    }
    else{
        console.log("you are obese");
    }
}