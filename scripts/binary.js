function transferToBinary(){
    var decimal = document.querySelector(".decimalInput").value
    dualNumbers=[]
    dualNumber=0
    while (decimal>0){
        intDec=Math.floor(decimal/2)
        console.log(decimal)
        console.log(intDec)
        
        if(decimal%2==0){
            dualNumbers.push(1)
            
        }
        else if (decimal==1){
            dualNumbers.push(1)
            intDec=1
        }
        else{
            dualNumbers.push(0)
        }
        
        decimal=decimal - (intDec)
        console.log(dualNumbers)

    }
    for (i=dualNumbers.length; i<dualNumbers.length; i=i-1){
        console.log(dualNumber, " ",i)
        dualNumber=dualNumber+dualNumbers[i]*10**i
    }
    document.querySelector(".binaryLabel").innerHTML= dualNumber
    
}

function transferToDecimal(){
    var dualNumber = document.querySelector(".binaryInput").value
    decimal=0
    dualNumber=dualNumber
    console.log(dualNumber)
    j=0
    console.log(dualNumber.length)
    if (dualNumber == NaN){
        decimalText = `Falsche Eingabe! Bitte nur 1 und 0 eingeben!`
    }
    for (i=dualNumber.length-1; i>=0; i=i-1){
        console.log(dualNumber[i])
        if (dualNumber[i] >1){
            decimalText = "Falsche Eingabe! Bitte nur 1 und 0 eingeben!"
            break}
        else{
            decimal= decimal + dualNumber[i]*2**j
            j=j+1
            console.log("i: ",i, "decimal: ", decimal)}
            decimalText=`<span class="labelNumber">${dualNumber}</span> ist die Binäre Schreibweise für die Dezimalzahl <span class="labelNumber"> ${decimal}</span>`
    }
    
    document.querySelector(".decimalLabel").innerHTML = decimalText
}