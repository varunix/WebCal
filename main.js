var inp1 = "";
var inp2 = "";
var op = "";
var flag = false;
var res;

const output = (inp1, op, inp2)=>{
    this.res = eval(inp1 +" "+ op +" "+ inp2);
    if(isNaN(this.res)){
        return "Error";
    }
    else{
        return this.res;
    }
};

function btn(value) {
    
    if(value == "=" && this.flag == true) {
        this.flag = false;
        document.getElementById("result").innerHTML = output(this.inp1, this.op, this.inp2);
        this.inp1 = "";
        this.op = "";
    }
    
    if(value == "AC") {
        this.inp1 = "";
        this.inp2 = "";
        this.op = "";
        this.flag = false;
        document.getElementById("result").innerHTML = "";
    }
    
    else if(value == "%" && this.flag == false) {
        this.op = value;
        this.flag = true;
        document.getElementById("result").innerHTML = "";
    }

    else if(value == "+/-") {
        if(this.inp1 == "" || this.inp2 == "") {
            document.getElementById("result").innerHTML = "";
        }

        else if(this.flag == false) {
            this.inp1 = this.inp1 * -1;
            document.getElementById("result").innerHTML = this.inp1;
        }

        else {
            this.inp2 = this.inp2 * -1;
            document.getElementById("result").innerHTML = this.inp2;
        }
    }

    else if(value == "/" && this.flag == false) {
        this.op = value;
        this.flag = true;
        document.getElementById("result").innerHTML = "";
    }

    else if(value == "*" && this.flag == false) {
        this.op = value;
        this.flag = true;
        document.getElementById("result").innerHTML = "";
    }

    else if(value == "-" && this.flag == false) {
        this.op = value;
        this.flag = true;
        document.getElementById("result").innerHTML = "";
    }

    else if(value == "+" && this.flag == false) {
        this.op = value;
        this.flag = true;
        document.getElementById("result").innerHTML = "";
    }

    else if(value == "." && (!inp1.includes(".") || !inp2.includes("."))) {
        if(this.flag == false){
            this.inp1 = this.inp1 + ".";
            document.getElementById("result").innerHTML = this.inp1;
        }
        else{
            this.inp2 = this.inp2 + ".";
            document.getElementById("result").innerHTML = this.inp2;
        }
    }

    else if(-1 < value && value < 10) {
        if(this.flag == false) {
            this.inp1 += value;
            document.getElementById("result").innerHTML += value;
        }

        else if(this.flag == true && this.inp1 == ""){
            this.inp1 = this.res;
            this.inp2 = value;
            document.getElementById("result").innerHTML += value;
        }
        
        else{
            this.inp2 += value;
            document.getElementById("result").innerHTML += value;
        }
    }
}