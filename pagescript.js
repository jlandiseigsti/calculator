for (i = 0; i< 11; i++){
    document.getElementById("container").innerHTML += "<div class='button number' id='num" + i + "'></div>";
}
for (i = 0; i< 7; i++){
    document.getElementById("container").innerHTML += "<div class='button operator' id='op" + i + "'></div>";
}

for (i = 0; i < 11; i++){
    id = "num" + i;
    // document.getElementById(id).addEventListener("click", ((arg) => { return () => {numButtonClick(arg)} })(id) );
    document.getElementById(id).addEventListener("click", (event) => { numButtonClick(event) } );
}
for (i = 0; i < 7; i++){
    id = "op" + i;
    // document.getElementById(id).addEventListener("click", ((arg) => {return ()=> {opButtonClick(arg)} })(id) );
    document.getElementById(id).addEventListener("click", (event) => { opButtonClick(event) } );
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

function numButtonClick(event){
    id = event.target.id;
    
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

function opButtonClick(event){
    id = event.target.id;

    if (id == "op0") {
        userNum1 = Number(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = "";
        userOp = '+';
    }
    if (id == "op1") {
        userNum1 = Number(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = "";
        userOp = '-';
    }
    if (id == "op2") {
        userNum1 = Number(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = "";
        userOp = '*';
    }
    if (id == "op3") {
        userNum1 = Number(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = "";
        userOp = '/';
    }
    if (id == "op5") {
        userNum1 = "";
        userNum2 = "";
        userOp = "";
        document.getElementById('display').innerHTML = "";
    }
    if (id == "op6") {
        document.getElementById('display').innerHTML = -1 * Number(document.getElementById('display').innerHTML);
    }
    if (id == "op4") {
        userNum2 = Number(document.getElementById('display').innerHTML);
        if (userOp == "+") { userOut = userNum1 + userNum2; }
        if (userOp == "-") { userOut = userNum1 - userNum2; }
        if (userOp == "*") { userOut = userNum1 * userNum2; }
        if (userOp == "/") { userOut = userNum1 / userNum2; }

        document.getElementById('display').innerHTML = userOut;
    }

    
}

fillButtons();