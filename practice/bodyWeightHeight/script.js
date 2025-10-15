let weight = prompt("enter your weight :");
let height = prompt("enter your heihgt :");
let BMI = weight / (height * height);
if  ( BMI<= 18.4){
    console.log(BMI +" "+"underWeight");
}
else if (BMI>=18.5 && BMI<= 24.9){
    console.log( BMI +" "+"normal" );
}
 else if(BMI>=25 &&  BMI<=39.9){
    console.log(BMI +" "+"overweight"); 
 }
else if(BMI>=40){
    console.log(BMI +" "+"Obese");
}



