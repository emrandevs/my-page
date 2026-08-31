let containerString="";
let containerNumber=0;
let symbol="";

function clearall(){
    containerString="";
    document.getElementById("output").value=0;
}
function seven(){
    let button =document.getElementById("seven").value;
    containerString+=button;
    document.getElementById("output").value=containerString;

}
function eight(){
    let button =document.getElementById("eight").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function nine(){
    let button =document.getElementById("nine").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function time(){
    containerNumber=+containerString;
    symbol="*";
    containerString="";
    document.getElementById("output").value =0;
}
function extraOfDivided(){
    containerNumber=+containerString;
    symbol="%";
    containerString="";
    document.getElementById("output").value =0;
}
function divided(){
    containerNumber=+containerString;
    symbol="/";
    containerString="";
    document.getElementById("output").value =0;
}
function four(){
    let button =document.getElementById("four").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function five(){
    let button =document.getElementById("five").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function six(){
    let button =document.getElementById("six").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function minus(){
    containerNumber=+containerString;
    symbol="-";
    containerString="";
    document.getElementById("output").value =0;
}
function one(){
    let button =document.getElementById("one").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function two(){
    let button =document.getElementById("two").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function three(){
    let button =document.getElementById("three").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function plus(){
    containerNumber=+containerString;
    symbol="+";
    containerString="";
    document.getElementById("output").value =0;
}
function zero(){
    let button =document.getElementById("zero").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function dot(){
    let button =document.getElementById("dot").value;
    containerString+=button;
    document.getElementById("output").value=containerString;
}
function equal(){
    if(symbol =="+"){
        res =containerNumber+Number(containerString);
        document.getElementById("output").value = res;
        containerString =res;
        containerNumber=0;
    }else if(symbol =="-"){
        res =containerNumber-Number(containerString);
        document.getElementById("output").value = res;
        containerString =res;
        containerNumber=0;
    }else if(symbol =="*"){
        res =containerNumber*Number(containerString);
        document.getElementById("output").value = res;
        containerString =res;
        containerNumber=0;
    }else if(symbol =="/"){
        res =containerNumber/Number(containerString);
        document.getElementById("output").value = res;
        containerString =res;
        containerNumber=0;
    }else if(symbol =="%"){
        res =containerNumber%Number(containerString);
        document.getElementById("output").value = res;
        containerString =res;
        containerNumber=0;
    }
}
