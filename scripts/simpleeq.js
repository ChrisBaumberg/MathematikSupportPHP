function simpleeq(){
    /* Getting Input */
    eq_a= document.querySelector(".inputEqA").value;
    eq_b= document.querySelector(".inputEqB").value;
    eq_c= document.querySelector(".inputEqC").value;

    /* Check, if b=0 and if a=c*/
    if(eq_b ==0 && eq_a != eq_c){
        /* if b=0 and a!=c x=undefined */
        eq_x = "undefined!"
        howToEqText = `Rechnungsweg:
        ${eq_a} + ${eq_b}x = ${eq_c}
        <=> ${eq_a}+ 0 = ${eq_c}
        <=> ${eq_a} = ${eq_c} &#9889 (Widerspruch!)
        <=> x=${eq_x} `
        document.querySelector("#howToEq").innerHTML=howToEqText
        document.querySelector("#howToEq").style.visibility="visible"
    }
    else if(eq_b == 0 && eq_a == eq_c){
        /* if b=0 and a=c x=infinity */
        eq_x = "infinity!"
        howToEqText = `Rechnungsweg:
        ${eq_a} + ${eq_b}x = ${eq_c}
        <=> ${eq_a}+ 0 = ${eq_c}
        <=> ${eq_a} = ${eq_c} (ist immer richtig!)
        <=> x=${eq_x} = &#8734`
        document.querySelector("#howToEq").innerHTML=howToEqText
        document.querySelector("#howToEq").style.visibility="visible"
    }
    else{
        /* else */
        eq_x = (eq_c-eq_a)/eq_b
        /* Define values for calculation way and check */
        eq_d = eq_c - eq_a
        if (eq_d%eq_b !=0){
            /* Round x to two digets, if x is float */
            eq_x = eq_x.toFixed(2)
            eq_a= parseFloat(eq_a)
        }
        eq_a = Number(eq_a)
        eq_b = Number(eq_b)
        eq_c = Number(eq_c)
        eq_d = Number(eq_d)
        eq_e = eq_b * eq_x
        eq_e = Number(eq_e)
        eq_f = eq_a + eq_e
        eq_f = Number(eq_f)
        /* Calculation Way */
        howToEqText = `Rechnungsweg:
        ${eq_a} + ${eq_b}x = ${eq_c} | -${eq_a}
        <=> ${eq_b}x = ${eq_c} - ${eq_a}
        <=> ${eq_b}x = ${eq_d}    |/${eq_b}
        <=> x=${eq_d} / ${eq_b}
        <=> x=${eq_x} `

        eq_x=parseFloat(eq_x).toFixed(2)

        console.log(eq_x)
        document.querySelector("#howToEq").innerHTML=howToEqText
        document.querySelector("#howToEq").style.visibility="visible"
        /* Check */
        checktext= `Probe:
        ${eq_a} + ${eq_b} * ${eq_x} = ${eq_c}?
        ${eq_a} + ${eq_e} = ${eq_c}?
        ${eq_f} = ${eq_c}!`
        document.querySelector("#areaSimpleCheck").innerHTML = checktext
        document.querySelector("#areaSimpleCheck").style.visibility="visible"

    }
    /* Show result */
    resultText=`x=${eq_x}`
    document.querySelector(".eqResult").innerHTML=resultText
    document.querySelector(".eqResult").style.visibility="visible"
    
}