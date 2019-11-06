for (i = 0; i< 11; i++){
    document.getElementById("container").innerHTML += "<div class='button number'></div>";
}
for (i = 0; i< 7; i++){
    document.getElementById("container").innerHTML += "<div class='button operator'></div>";
}

const NUMBERS = document.querySelectorAll(".number");
var numberButtons = Array.from(NUMBERS);
const OPERATORS = document.querySelectorAll(".opeartor");
var operatorButtons = Array.from(OPERATORS);

for (i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", (numButtonClick));
}
for (i = 0; i < operatorButtons.length; i++){
    operatorButton[i].addEventListener("click", (opButtonClick));
}

function fillButtons(){
    for (i = 0; i < numberButtons.length; i++){
        if (i==10) {numberButton[i].innerHTML = ".";}
        else {
            numberButton[i].innerHTML = i;
        }
    }

}

function numButtonClick(){

}

function opButtonClick(){
    
}

fillButtons();