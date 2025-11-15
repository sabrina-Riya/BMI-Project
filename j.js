
const hei=document.querySelector('#num'); //values from input is string by default ive to convert into numbers
const wei=document.querySelector('#bum'); //values from input r strings by default ############parseInt########
const par=document.querySelector('#dis');
const cal=document.querySelector('#cal');
cal.addEventListener(('click'),function(e){

  //height conversion

  let store=parseFloat(hei.value); //parseInt cutts of and rounds the value point baddey

  let y=store/100; //parseFloat nile decimal plus int both ashbe


//weight conversion
  const st1=parseFloat(wei.value);

  //bmi calculation==========since height weight both variable separate we dont need v

  //showing in the screen
  

  const calc=st1/(y)**2;
  console.log(calc);
  if (calc<=18.5){
    par.innerHTML=`Your BMI is ${calc.toFixed(2)} <br><br>category: Underweight`;

  }
  else if (calc>=18.5 && calc<=24.9){
    par.innerHTML=`Your BMI is ${calc.toFixed(2)} <br><br>category: Normal`;
  }
  else if(calc>=25 && calc<=29.9){
    par.innerHTML=`Your BMI is ${calc.toFixed(2)} <br><br>category: OverWeight`;

  }

  else if (calc>=30){
    par.innerHTML=`Your BMI is ${calc.toFixed(2)} <br><br>category: Obese`;

  }



})

