for (i = 0; i< 11; i++){
    document.getElementById("container").innerHTML += "<div class='button number' id='num" + i + "'></div>";
}
for (i = 0; i< 7; i++){
    document.getElementById("container").innerHTML += "<div class='button operator' id='op" + i + "'></div>";
}


for (i = 0; i < 11; i++){
    id = "num" + i;
    document.getElementById(id).addEventListener("click", ((arg) => {return ()=> {numButtonClick(arg)} })(id) );
}
for (i = 0; i < 7; i++){
    id = "op" + i;
    document.getElementById(id).addEventListener("click", ((arg) => {return ()=> {opButtonClick(arg)} })(id) );
}

function fillButtons(){
    for (i = 0; i < 11; i++){
        if (i == 10)
        {
            document.getElementById('num10').innerHTML = ".";
        }
        else {
            id = "num" + i;
            document.getElementById(id).innerHTML = i;
        }
    }
    document.getElementById('op0').innerHTML = "+";
    document.getElementById('op1').innerHTML = "-";
    document.getElementById('op2').innerHTML = "*";
    document.getElementById('op3').innerHTML = "/";
    document.getElementById('op4').innerHTML = "=";
    document.getElementById('op5').innerHTML = "C";
    document.getElementById('op6').innerHTML = "+/-";
}

function numButtonClick(id){

    if (id == "num10")
    {
        document.getElementById('display').innerHTML += ".";
    }
    for (i = 0; i < 10; i++)
    {
        choice = "num" + i;
        if (id == choice)
        {
            document.getElementById('display').innerHTML += i;
        }
    }
}

function opButtonClick(id){
    
}

fillButtons();