function getInputCalcway(){
    calcway=document.querySelector(".calcWayF")
    way="Lösungsweg"
    calcway.value=way
    return [calcway, way]
}


function calcFraction(){
    [calcway, way] = getInputCalcway()
    calcway.value=way
    operator=document.querySelector(".operationFraction").value
    switch (operator){
    case "+":
        fractionAddition();
        break;
    case "-":
        fractionSubstraction();
        break;
    case "*":
        fractionMultiply();
        break;
    case "/":
        fractionDivision();
        break;
}
    console.log(e)
    console.log(Math.abs(e))
    calcway.value=way;
}
function readNumber(){
    /* get Number from Input*/
    firstNum=document.getElementById("firstNumber").value
    secondNum=document.getElementById("secondNumber").value 
}
function leastCommonMultiple(){
    /* Calculate Least Common Multiple */
    console.log("LCM")
    readNumber()
    if ((firstNum=="")||(secondNum=="")){
        alert("Bitte ganze Zahlen eingeben")
        document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
        /*check if input is empty*/
    }
    else{
    firstNum=parseInt(firstNum)
    secondNum=parseInt(secondNum)
    if (firstNum>secondNum){
        ex=firstNum
        firstNum=secondNum
        secondNum=ex
        /*eventually change numbers, if first number is bigger than second number*/
    }
    calcEnd=firstNum*secondNum 
    /*the product of the numbers is a common multiple, but there could be a common multiple, that's smaller, if both numbers have a common Divisor, that's beneath this product */   
    firstNumMod=[]
    secondNumMod=[]
    bothNumMod=[]

    for (i=1; i<=calcEnd; i=i+1)
    {
        if ((i%firstNum==0) && (i%secondNum==0)){
            bothNumMod.push(i)
        }
        /*check, if % of both numbers is 0. If it's true, it's a common multiple. */
        else{if (i%firstNum==0){
            firstNumMod.push(i)
        }
        /*check, if number is a multiple of only the first number */
        else if(i%secondNum==0){
            secondNumMod.push(i)
        }
        /*check, if number is a multiple of only the second number */
        
    }
    
}
    if (firstNum != secondNum){
    minNumMod=Math.min(...bothNumMod)
    }
    else{
        minNumMod = firstNum
    }
    /* find the minimum in the array */
    document.getElementById("labelOutput").innerHTML="KGV"
    document.getElementById("outputCalc").value=minNumMod
    document.getElementById("buttonReset").disabled=false;
   
}
    console.log("minNumMod",minNumMod)
     
}
function multipleNum(){
    readNumber()
    if ((firstNum=="")||(secondNum=="")){
        alert("Bitte ganze Zahlen eingeben")
        document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
        /*check if input is empty*/
    }
    else{
    firstNum=parseInt(firstNum)
    secondNum=parseInt(secondNum)
    }
    multiples=[]
    for (i=1; i<=secondNum; i = i+1)
        {
            if(i%firstNum==0){
                multiples.push(i)
            }
        }
        numOfElements=`Es wurden ${multiples.length} Elemente gefunden`
        document.querySelector("#primList").innerHTML=multiples
        document.querySelector("#outputCalc").value=numOfElements
        document.getElementById("#primList").style.visibility="visible"
}
function greatestCommonDivisor(){
    /*calculate the greatest common divisor */
    readNumber()
    
    if ((firstNum=="")||(secondNum=="")){
        alert("Bitte ganze Zahlen eingeben")
        document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
        /*check, if there's a valid input */
    }
    else{
        firstNum=parseInt(firstNum)
        secondNum=parseInt(secondNum)
      
        if (firstNum>secondNum){
            ex=firstNum
            firstNum=secondNum
            secondNum=ex
            
        }
    
        divisor=[]
        for (i=secondNum; i>1; i=i-1){
            if ((secondNum%i==0)&&(firstNum%i==0)){
                divisor.push(i)
            }
            /*if there's a number that's % of both inputed numbers is 0, it's a common divisor */
        }
        if(divisor.length==0){
            greatestDivisor=1
        } /*1 is always a divisor of two numbers, but that's not, what we are looking for! */
        else{
            greatestDivisor=Math.max(...divisor)
        }
        if (greatestDivisor !=1){
           
            document.getElementById("labelOutput").innerHTML="GGT"
            document.getElementById("outputCalc").value=greatestDivisor
            document.getElementById("buttonReset").disabled=false;
        }
        else{
            document.getElementById("labelOutput").innerHTML="GGT"
            document.getElementById("outputCalc").value="Keinen GGT gefunden!"
            document.getElementById("buttonReset").disabled=false;
        }
        
    }

}

function primNumber(){
    /*checking, if number is a prim number */
    readNumber()
    if (firstNum==""){
        alert("Bitte ganze Zahlen eingeben")
        document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
    }
    else{
      
        if(firstNum<=1){
            alert("Bitte nur positive, ganze Zahlen außer 1 eingeben")
            document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
        }
        /* check valid input */
        else{
   
        divisor=[]

        for(i=1; i<=firstNum;i=i+1){
            if (firstNum%i==0){
                divisor.push(i)
            }
         /*check, if there are divisors expect of 1 and the number, you are checking*/
        }
        
        document.getElementById("labelOutput").innerHTML="Primzahl"
        document.getElementById("buttonReset").disabled=false; 
        if(divisor.length==2){
            document.getElementById("outputCalc").value=`${firstNum} ist eine Primzahl`
           /*if there's only 1 and the number, it's a prim number */
        }
        else{
            document.getElementById("outputCalc").value=`${firstNum} ist keine Primzahl`
        }

    }
}
}
function listOfPrims(){
    /*list all prim number within a range of two numbers */
    readNumber()
    if ((firstNum=="")||(secondNum=="")){
        alert("Bitte ganze Zahlen eingeben")
    }
    /*check valid input*/
    else{
        firstNum=parseInt(firstNum)
        secondNum=parseInt(secondNum)
        if (firstNum>secondNum){
            ex=firstNum
            firstNum=secondNum
            secondNum=ex
            /*switch numbers, if first number> second number */
        }
        primlist=[]
        for (i=firstNum; i<=secondNum; i=i+1){
            divisor=[]
            for (j=1; j<=i;j=j+1){
                if(i%j==0){
                    divisor.push(j)
                    
                }
                /*check prim number (see function primNumber) */
            }
            if(divisor.length==2){
                primlist.push(i)
               /*add prim number to array */
            }
        
        }
        amount=primlist.length
        /*amount of prim numbers */
        console.log(amount)
        if (amount==0){
            document.getElementById("labelOutput").innerHTML="Liste der Primzahlen"
            document.getElementById("primList").innerHTML="Im angegebenen Wertebereich gibt es keine Primzahlen!"
            document.getElementById("primList").style.visibility="visible"
         
            document.getElementById("buttonReset").disabled=false
            document.getElementById("outputCalc").style.visibility="hidden"
        }/*no prim numbers in range */
        else{
        document.getElementById("labelOutput").innerHTML="Liste der Primzahlen"
        document.getElementById("primList").innerHTML=primlist
        document.getElementById("primList").style.visibility="visible"
        document.getElementById("outputCalc").value=`${amount} Elemente`
        
        document.getElementById("buttonReset").disabled=false;
    }
    }
}
function formResetFraction(){
    document.getElementById("firstNumber").value=""
    document.getElementById("secondNumber").value=""
    document.getElementById("outputCalc").value=""
    document.getElementById("labelOutput").innerHTML="Ausgabe:"
    document.getElementById("primList").innerHTML=""
    document.getElementById("buttonReset").disabled=true;
    document.getElementById("primList").style.visibility="hidden"
    
    /*reset the inputs, disable the reset button and set outputs on hidden */
}

function leastCommonMultiple2(firstNum, secondNum){
    
    
    if ((firstNum=="")||(secondNum=="")){
        alert("Bitte ganze Zahlen eingeben")
        document.getElementById("outputCalc").value="Fehlerhafte Eingabe!"
    }
    else{
    firstNum=parseInt(firstNum)
    secondNum=parseInt(secondNum)
    
    if (firstNum>secondNum){
        ex=firstNum
        firstNum=secondNum
        secondNum=ex
        
    }
    calcEnd=firstNum*secondNum    
    firstNumMod=[]
    secondNumMod=[]
    bothNumMod=[]
    for (i=1; i<=calcEnd; i=i+1)
    {
        if ((i%firstNum==0) && (i%secondNum==0)){
            bothNumMod.push(i)
        }
        else{if (i%firstNum==0){
            firstNumMod.push(i)
        }
        else if(i%secondNum==0){
            secondNumMod.push(i)
        }
    }
    
}
    if(firstNum != secondNum){
    minNumMod=Math.min(...bothNumMod)

    }
    else{
        minNumMod = firstNum
 
    }
}
    
    return minNumMod
}
function greatestCommonDivisor2(firstNum,secondNum){

    
        firstNum=parseInt(firstNum)
        secondNum=parseInt(secondNum)
        if (firstNum>secondNum){
            ex=firstNum
            firstNum=secondNum
            secondNum=ex
        }
        divisor=[]
        for (i=secondNum; i>1; i=i-1){
            if ((secondNum%i==0)&&(firstNum%i==0)){
                divisor.push(i)
            }
        }
        if(divisor.length==0){
            greatestDivisor=1
        }
        else{
            greatestDivisor=Math.max(...divisor)
        }
        if (greatestDivisor !=1){
           
            document.getElementById("labelOutput").innerHTML="GGT"
            document.getElementById("outputCalc").value=greatestDivisor
            document.getElementById("buttonReset").disabled=false;
        }
        else{
            document.getElementById("labelOutput").innerHTML="GGT"
            document.getElementById("outputCalc").value="Keinen GGT gefunden!"
            document.getElementById("buttonReset").disabled=false;
        }
        
    
    return greatestDivisor
}
//function showCalcWay(){
 /* show way of calculation */   
/*document.getElementById("calcWayF").style.visibility="visible"
document.getElementById("labelWayF").style.visibility="visible"
}*/
/* Calculation of fractions */
function fractionAddition(){
    /*Addition */
    getInputFraction() 
    if(b!=d){   
    f=leastCommonMultiple2(b,d)
    /*get lcm for dominator*/
    }
    else{
        f=b
    }

    div1=(f/b)
    div2=(f/d)
    k=f
    /* get multiple for a (div1) and b(div2) */
    ad=a*div1
    bc=c*div2
    e=ad+bc
    
    /* shorten, if possible */
    shorten(e,f)

    g=e/f
    abse=Math.abs(e)
    
    absf=Math.abs(f)
    partF=""
    if((abse>absf)&&(abse%absf!=0))
        {
    rest=partialFraction(e,f)
    intNum=partialFraction(e,f)
    partF=`Partieller Bruch: ${intNum} ${rest}/${f}`
    console.log(rest,intNum)
    }
 
    /*shorten, if possible */
    if(e==ad+bc){
        shortentx=""
    }
    else{
        shortentx=`gekürzt= ${e}/${f}`
    }
    if(e%f==0){
        g=e/f
        document.getElementById("intNum").style.visibility="visible"
        document.getElementById("inputIntNum").value=g
        document.getElementById("inputIntNum").style.visibility="visible"
    }else{
        document.getElementById("intNum").style.visibility="hidden"
    document.getElementById("inputIntNum").value=""
    document.getElementById("inputIntNum").style.visibility="hidden"
    }
    /*if (b=d){
        f=k
    }*/
    document.getElementById("numerator3").value=e
    document.getElementById("dominator3").value=f
    /*Way of calculation */
    way=`Ausgangsgleichung:
${a}/${b}+${c}/${d} 
Lösungsweg:
Zähler 1 = a; Zähler 2 =c
KGV berechnen: ${f}=bd
Divisor von ${f} und ${b} berechnen=${div1}=div1
Divisor von ${f} und ${d} berechnen=${div2}=div2
a*div1 + c*div2 im Zähler und bd im Nenner und bd im Nenner
(a*div1+c*div2)/bd
= ${a}*${div1}+${c}*${div2}/${f}
= (${ad}+${bc})/${f}
=${ad+bc}/${f}
${shortentx}
${partF}`
    calcway.innerHTML=way
}
function fractionSubstraction(){
    getInputFraction()    
    if(b!=d){   
        f=leastCommonMultiple2(b,d)
        /*get lcm for dominator*/
        }
        else{
            f=b
        }
    div1=(f/b)
    div2=(f/d)
    k=f

    ad=a*div1
    bc=c*div2
    e=ad-bc
    shorten(e,f)
    g=e/f
    abse=Math.abs(e)
    absf=Math.abs(f)
    partF=""
    if((abse>absf)&&(abse%absf!=0))
        {
        
        rest=partialFraction(e,f)
        intNum=partialFraction(e,f)
        partF=`Partieller Bruch: ${intNum} ${rest}/${f}`
        console.log(rest,intNum)
    }
   
    if(e==ad+bc){
        shortentx=""
    }
    else{
        shortentx=`gekürzt = ${e}/${f}`
    }
    if(e%f==0){
        g=e/f
        document.getElementById("intNum").style.visibility="visible"
        document.getElementById("inputIntNum").value=g
        document.getElementById("inputIntNum").style.visibility="visible"
    }else{
        document.getElementById("intNum").style.visibility="hidden"
    document.getElementById("inputIntNum").value=""
    document.getElementById("inputIntNum").style.visibility="hidden"
    }
    document.getElementById("numerator3").value=e
    document.getElementById("dominator3").value=f
      if (b=d){
        f=k
    }
    way=`Ausgangsgleichung:
${a}/${b}-${c}/${d} 
Lösungsweg:
Zähler 1 = a; Zähler 2 =c
KGV berechnen: ${f}=bd
Divisor von ${f} und ${b} berechnen=${div1}=div1
Divisor von ${f} und ${d} berechnen=${div2}=div2
a*div1 - c*div2 im Zähler und bd im Nennerund bd im Nenner
(a*div1+c*div2)/bd
= ${a}*${div1}-${c}*${div2}/${f}
= (${ad}-${bc})/${f}
=${ad-bc}/${f}
${shortentx}
${partF}`

}
function fractionMultiply(){
    getInputFraction()
    ad=greatestCommonDivisor2(a,d)
    bc=greatestCommonDivisor2(b,c)
    ash=a/ad
    bsh=b/bc
    csh=c/bc
    dsh=d/ad
    ac=ash*csh
    bd=bsh*dsh
    e=ac
    f=bd
    shorten(e,f)
    g=e/f
    abse=Math.abs(e)
    absf=Math.abs(f)
    partF=""
    if((abse>absf)&&(abse%absf!=0))
        {
    rest=partialFraction(e,f)
    intNum=partialFraction(e,f)
    partF=`Partieller Bruch: ${intNum} ${rest}/${f}`
    console.log(rest,intNum)
    }
    if(e==ash*csh){
        shortentx=""
    }
    else{
        shortentx=`gekürzt = ${e}/${f}`
    }
    if(e%f==0){
        g=e/f
        document.getElementById("intNum").style.visibility="visible"
        document.getElementById("inputIntNum").value=g
        document.getElementById("inputIntNum").style.visibility="visible"
    }else{
        document.getElementById("intNum").style.visibility="hidden"
    document.getElementById("inputIntNum").value=""
    document.getElementById("inputIntNum").style.visibility="hidden"
    }
    document.getElementById("numerator3").value=e
    document.getElementById("dominator3").value=f
    way=`Ausgangsgleichung:
${a}/${b}*${c}/${d} 
Lösungsweg:
Zähler 1 = a; Zähler 2 =c; Nenner 1 = b; Nenner 2 = d;
GGT von a und d berechnen: ${ad}=ad
GGT von b und c berechnen: ${bc}=bc
a durch ad kürzen = ash =${ash},
b durch bc kürzen = bsh =${bsh},
c durch bc kürzen = csh =${csh},
d durch ad kürzen = dsh =${dsh}
= ${ash}*${csh}/${bsh}*${dsh}
= ${ash*csh}/${bsh*dsh}
${shortentx}
${partF}`

}
function fractionDivision(){
    getInputFraction()
    ac=greatestCommonDivisor2(a,c)
    bd=greatestCommonDivisor2(b,d)
    ash=a/ac
    bsh=b/bd
    csh=c/ac
    dsh=d/bd
    ad=ash*dsh
    bc=bsh*csh
    e=ad
    f=bc
    shorten(e,f)
    g=e/f
    abse=Math.abs(e)
    absf=Math.abs(f)
    partF=""
    console.log(abse,absf)
    console.log(abse>absf)
    console.log(abse%absf!=0)
    console.log((abse>absf)&&(abse%absf!=0))
    if((abse>absf)&&(abse%absf!=0))
        {
    rest=partialFraction(e,f)
    intNum=partialFraction(e,f)
    partF=`Partieller Bruch: ${intNum} ${rest}/${f}`
    console.log(partF)
    console.log(rest,intNum)
    }
    if(e==ash*dsh){
        shortentx=""
    }
    else{
        shortentx=`gekürzt = ${e}/${f}`
    }
    if(e%f==0){
        g=e/f
        document.getElementById("intNum").style.visibility="visible"
        document.getElementById("inputIntNum").value=g
        document.getElementById("inputIntNum").style.visibility="visible"
    } else{
        document.getElementById("intNum").style.visibility="hidden"
    document.getElementById("inputIntNum").value=""
    document.getElementById("inputIntNum").style.visibility="hidden"
    }
    document.getElementById("numerator3").value=e
    document.getElementById("dominator3").value=f
    way=`Ausgangsgleichung:
(${a}/${b})/(${c}/${d})
Lösungsweg:
=${a}/${b}*${d}/${c}
Zähler 1 = a; Zähler 2 =c; Nenner 1 = b; Nenner 2 = d;
GGT von a und c berechnen: ${ac}=ac
GGT von b und d berechnen: ${bd}=bd
a durch ac kürzen = ash =${ash},
b durch bd kürzen = bsh =${bsh},
c durch ac kürzen = csh =${csh},
d durch bd kürzen = dsh =${dsh}
= ${ash}*${dsh}/${bsh}*${csh}
= ${ash*dsh}/${bsh*csh}
${shortentx}
${partF}`
console.log(partF)
}
function shorten(a,b){
    div=greatestCommonDivisor2(a,b)
    e=a/div
    f=b/div
    return e, f
}

function getInputFraction(){
    a=document.getElementById("numerator1").value
    if(a==""){
        a=parseInt(1)
    }
    else{
        a=parseInt(a)
    }
    b=document.getElementById("dominator1").value
    if(b==""){
        b=parseInt(1)
    }
    else{
        b=parseInt(b)
    }
    c=document.getElementById("numerator2").value
    if(c==""){
        c=parseInt(1)
    }
    else{
        c=parseInt(c)
    }
    d=document.getElementById("dominator2").value
    if(d==""){
        d=parseInt(1)
    }
    
    else{
        d=parseInt(d)
    }
    console.log(b,d)
    if ((b==0)||(d==0)){
        alert("Division durch 0!")
        
    }
    
}
function formReset2(){
    [calcway, way] = getInputCalcway()
    way="Lösungsweg"
    calcway.value=way
    document.getElementById("intNum").style.visibility="hidden"
    document.getElementById("inputIntNum").value=""
    document.getElementById("inputIntNum").style.visibility="hidden"
    document.getElementById("numerator1").value=""
    document.getElementById("dominator1").value=""
    document.getElementById("numerator2").value=""
    document.getElementById("dominator2").value=""
    document.getElementById("numerator3").value=""
    document.getElementById("dominator3").value=""

}

function partialFraction(){
    
         
            rest=e%f
            rest=Math.abs(rest)
            if (e<0){
                intNum=Math.ceil(e/f)
            }
            else{
            intNum=Math.floor(e/f)
            }
            return rest, intNum
        }
        
