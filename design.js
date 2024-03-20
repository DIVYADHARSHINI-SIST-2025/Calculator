function addition(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a+b
    document.getElementById("num").value=c;

}
function subtraction(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a-b
    document.getElementById("num").value=c;
    
}
function multiplication(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a*b
    document.getElementById("num").value=c;
    
}
function division(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a/b
    document.getElementById("num").value=c;
    
}