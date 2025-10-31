function equation(){
    document.getElementById("submitButton").disabled=true
    document.getElementById("buttonResetEq").disabled=false
    a=document.getElementById("firstNumberEq").value
    b=document.getElementById("secondNumberEq").value
    c=document.getElementById("thirdNumberEq").value
    d=document.getElementById("fourthNumberEq").value
    if (a==""){
        a=parseFloat(1)
    }
    else{
        a=parseFloat(a)
    }   
    if (b==""){
        b=parseFloat(1)
    }else{
        b=parseFloat(b)
    }
    if (c==""){
        c=parseFloat(0)
    }
    else{
        c=parseFloat(c)
    }
    if (d==""){
       
      d=parseFloat(0)
    }else{
        d=parseFloat(d)
    }
    e=parseFloat(c-d)
    p=parseFloat(b/a)
    q=parseFloat(e/a)
    r=parseFloat((p/2)*(p/2)-q)
  
  
x1=0
x2=0

if ((a==0)||((typeof(a)||typeof(b)||typeof(c)||typeof(d))!="number")){
    x1=String("Fehlerhafte Eingabe!")
    mark="n/a"
}


else{
    if (r<0){
        mark="r<0"
        x1=String("Keine Lösung")
        x2="n/a"
        resultCalcway = "r<0, gibt es keine Lösung."
    }
    else{
        if(r==0){
        x1=parseFloat(-(p/2))
        x2="n/a"
        mark="r=0"
        resultCalcway = "r=0, gibt es eine Lösung. (nur x1)"
        }
    else{
        x1=parseFloat(-(p/2)+Math.sqrt(r))
        x2=parseFloat(-(p/2)-Math.sqrt(r))
        mark="r>0"
        resultCalcway = "r>0, gibt es zwei Lösungen. (x1 und x2)"
    }
}
}

if (typeof(x1)=="number"){
    x1o=x1.toFixed(2)
}
else{
    x1o=x1
}

    document.getElementById("result1").innerHTML="x1"
    document.getElementById("result1").style.visibility="visible"
    document.getElementById("inputResult1").value=x1o
    document.getElementById("inputResult1").style.visibility="visible"
    console.log("x1=",x1)
    if (x2!="n/a"){
        x2o=x2.toFixed(2)
    document.getElementById("result2").innerHTML="v x2"
    document.getElementById("result2").style.visibility="visible"
    document.getElementById("inputResult2").value=x2o
    document.getElementById("inputResult2").style.visibility="visible"
    console.log("x2=",x2)
}
document.getElementById("calcWay").style.visibility="visible"

document.getElementById("calcWay").innerHTML=`Ausgangsgleichung:
${a}x²+${b}x+${c}=${d} 
Lösungsweg:
<=> ${a}x²+${b}x+${c}-${d}=0
<=> ${a}x²+${b}x+${e}=0
-------------------------
p=${b}/${a}=${p.toFixed(2)}; q=${e}/${a}=${q.toFixed(2)}; r=(${p.toFixed(2)}/2)²-${q.toFixed(2)}=${r.toFixed(2)} ; => (${mark})
--------------------------
${resultCalcway}
-----------------------------
x1=-(p/2)+Wurzel((p/2)²-q)=-(p/2)+Wurzel(r)
  =-(${p.toFixed(2)}/2)+Wurzel(${r.toFixed(2)})
x2=-(p/2)-Wurzel((p/2)²-q)=-(p/2)-Wurzel(r)
    =-(${p.toFixed(2)}/2)-Wurzel(${r.toFixed(2)})
--------------------------
Lösung(en) siehe oben.
`
if (r>=0){

document.getElementById("areaCheck").style.visibility="visible"
document.getElementById("areaCheck").innerHTML=`Probe:
1) ${a}*${x1o}²+${b}*${x1o}+${c}=${d}?
<=> ${a}*${x1*x1}+${b}*${x1}+${c}=${d}
<=> ${a*(x1o*x1o)}+${b*x1o}+${c}=${d}
<=> ${a*(x1*x1)+b*x1}+${c}=${d}
<=> ${a*(x1*x1)+b*x1+c}=${d} ?=korrekt
2*) ${a}*${x2o}²+${b}*${x2o}+${c}=${d}?
<=> ${a}*${x2*x2}+${b}*${x2}+${c}=${d}
<=> ${a*(x2*x2)}+${b*x2}+${c}=${d}
<=> ${a*(x2*x2)+b*x2}+${c}=${d}
<=> ${a*(x2*x2)+b*x2+c}=${d} ?=korrekt
*Bitte Angaben unter "Bitte beachten" beachten!`
 
}
}
function formReset(){
    document.getElementById("firstNumberEq").value=""
    document.getElementById("secondNumberEq").value=""
    document.getElementById("thirdNumberEq").value=""
    document.getElementById("fourthNumberEq").value=""
    document.getElementById("result1").innerHTML=""
    document.getElementById("result1").style.visibility="hidden"
    document.getElementById("inputResult1").innerHTML=""
    document.getElementById("inputResult1").style.visibility="hidden"
    
    document.getElementById("result2").innerHTML=""
    document.getElementById("result2").style.visibility="hidden"
    document.getElementById("inputResult2").innerHTML=""
    document.getElementById("inputResult2").style.visibility="hidden"
    document.getElementById("submitButton").disabled=false
    document.getElementById("buttonResetEq").disabled=true
    document.getElementById("calcWay").style.visibility="hidden"
 
document.getElementById("areaCheck").style.visibility="hidden"
document.getElementById("areaCheck").innerHTML=""
}

