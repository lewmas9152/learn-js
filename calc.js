let num1 = 1026;
let num2 = 50;



document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
let result = document.getElementById("sum-el");




function addEl () {
   let addition=num1+num2
    result.textContent= " sum:" + addition;
}


function subEl () {
    let subtraction=num1-num2
    result.textContent =" sum:" +  subtraction;
}

function divEl () {
    let division=num1/num2;
    result.textContent =" sum:" +  division;
}

function multEl () {
    let multiplication=num1*num2;
    result.textContent =" sum:" +  multiplication;
}



