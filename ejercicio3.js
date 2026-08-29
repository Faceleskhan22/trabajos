function bmi(peso, altura) {
    
    bmi = peso / altura^2;
    switch(true){
        
        case (bmi <18.5):
            console.log("bajo peso");
            break;
        case (bmi<=18.5 || bmi<=24.9):
            console.log("normal");
            break;
        case(bmi <= 25 ||  bmi <=29.9):
            console.log("sobrepeso")
            break;
        case(bmi >=30):
            console.log("obeso"); 
        break;
        
    }
  return bmi
}
console.log(bmi(64, 1.7));