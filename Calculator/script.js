
const display = document.getElementById("display");

function add(input){
    display.value += input;
}

function c(){
    display.value = "";
}

function cal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}