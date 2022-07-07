var input = "";
const output = (input)=>{
    return eval(input);
};
function btn(value) {
    
    if(value == "=") {
        document.getElementById("result").innerHTML = output(input);
    }
    
    if(value == "AC") {
        input = "";
        document.getElementById("result").innerHTML = "";
        console.log(document.getElementById("result").innerHTML);
    }
    
    else if(value == "%") {
        input += value;
        document.getElementById("result").innerHTML += value;
    }

    else if(value == "+/-") {
        input += value;
        document.getElementById("result").innerHTML += "-";
    }

    else if(value == "/") {
        input += value;
        document.getElementById("result").innerHTML += value;
    }

    else if(value == "*") {
        input += value;
        document.getElementById("result").innerHTML += value;
    }

    else if(value == "-") {
        input += value;
        document.getElementById("result").innerHTML += value;
    }

    else if(value == "+") {
        input += value;
        document.getElementById("result").innerHTML += value;
    }

    else if(-1 < value && value < 10) {
        input += value;
        document.getElementById("result").innerHTML += value;
    }
}