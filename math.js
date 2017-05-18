var erej=[];
function metoda() {
    var a=document.getElementById("bro").value;
    erej=a.split(" ",10);
    document.getElementById("novip").innerHTML=Math.max.apply(null,erej);
}


function provjera(){
    var ime=document.getElementById("ime").value;
    var godine=document.getElementById("godine").value;

    if(godine<18){
        alert("Upišite veću godinu")
    }
    else if(godine>99){
        alert("Upišite manju godinu")
    }
    if(ime.length<10){
        alert("Upišite dulje ime")
    }
}


function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "Value too large";
    }
    else if(document.getElementById("id1").value===""){
        txt="Upisite nesto";
    }
    else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}

function div() {
    var b=Math.floor((Math.random() * 1000) + 1);
    if(b>0 && b<201){
        document.getElementById("divcic").style.backgroundColor="blue";
    }
    else if(b>200 && b<401 ){
        document.getElementById("divcic").style.backgroundColor="red";
    }
    else if(b>600 && b<801 ){
        document.getElementById("divcic").style.backgroundColor="green";
    }
    else if(b>800 && b<1001 ){
        document.getElementById("divcic").style.backgroundColor="yellow";
    }
    else{
        document.getElementById("divcic").style.backgroundColor="white";
    }


}

