var isStudent = true;
var price = 500;
if(isStudent){
 var discount = price * 50/100;
 var pay = price - discount;
 console.log(pay);
}
else{
    if(age <=10){
        var price =0;
        console.log(price);
    }
    else if(age >= 60){
        var discount = price * 15/100;
        var pay = price - discount;
        console.log(pay);
    }
    else{
        console.log(price);
    }
}