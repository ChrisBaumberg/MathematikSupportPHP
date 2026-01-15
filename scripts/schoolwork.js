function getInput(){
    startvalue=document.querySelector(".startValueSW").value
    endvalue=document.querySelector(".endValueSW").value
    numoftasks=document.querySelector(".numberOfTasksSW").value
    if (startvalue>endvalue){
        t=startvalue
        statusbar=endvalue
        endvalue=t
    }
    checkbox=document.querySelector(".checkBasic")
    startvalue = parseInt(startvalue)
    endvalue = parseInt(endvalue)
    numoftasks = parseInt(numoftasks)
    return startvalue, endvalue, numoftasks
}
function getRandomInt(){
    return Math.floor(Math.random()*4);
}
function getRandomArbitrary(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
function getOperator(){
    taskoperation=document.querySelector(".operationTasks").value

    if (taskoperation=="z"){
        oper=parseInt(getRandomInt())
     
        switch (oper){
            case 0:
                taskoperation="+";
                break
            case 1:
                taskoperation="-";
                break
            case 2:
                taskoperation="*";
                break
            case 3:
                taskoperation="/";
                break
        }
    }
    return taskoperation
}

function randomTasks(){
    startvalue=getInput()
    endvalue=getInput()
    numoftasks=getInput()
    list=document.querySelector(".taskList")
    liste=[]
    for (i=0; i<numoftasks; i=i+1){
        taskoperation=getOperator()
        num1=getRandomArbitrary(startvalue,endvalue)
        num2=getRandomArbitrary(startvalue,endvalue)
        
        if (checkbox.checked==true){
            if (num1==0){
                num1=1
            }
            if (num2==0){
                num2=1
            }
            if (taskoperation==("-" || "/")){
                if (num1<num2){
                    t=num1
                    num1=num2
                    num2=t
                }
            }
            if((taskoperation=="/")&&(num1%num2!=0)){
                while (num1%num2!=0){
                    num1=num1+1
                }
            }
        }
        if (num2 < 0){
            num2 = `(${num2})`
        }
    listel=document.createElement("li")
    listel.setAttribute("class",`task${i}`)
    content=document.createTextNode(`${i+1}.Aufgabe: ${num1} ${taskoperation} ${num2} =`)
    listel.appendChild(content)
    list.appendChild(listel)
   
    document.querySelector(".taskHead").style.visibility="visible"
    liste.push(i)
   
    }
    
   
    document.querySelector(".buttonResetT").disabled=false;
    document.querySelector(".buttonConfirmSW").disabled=true;
    document.querySelector(".btnPrint").disabled=false;
}
function resetFormSW(){
    list=document.querySelector(".taskList")
    for (i=0; i<numoftasks; i=i+1){
        remItem=document.querySelector(`.task${i}`)
        list.removeChild(remItem)
    }
    document.querySelector(".startValueSW").value="1"
    document.querySelector(".endValueSW").value="10"
    document.querySelector(".numberOfTasksSW").value="10"
    document.querySelector(".taskHead").style.visibility="hidden"
    document.querySelector(".buttonResetT").disabled=true;
    document.querySelector(".buttonConfirmSW").disabled=false;
    document.querySelector(".checkBasic").checked=false;
    document.querySelector(".btnPrint").disabled=true;
}
function printTasks(){
    printContents=document.querySelector(".taskList").innerHTML;
    originalContent=document.body.innerHTML;
    document.body.innerHTML=printContents;

    window.print();
    document.body.innerHTML=originalContent;
}
function checkResult(){
    number1=document.querySelector(".firstNumberTask").value
    number1=Number(number1)
    number2=document.querySelector(".secondNumberTask").value
    number2=Number(number2)
    operator=document.querySelector(".calcOperationTask").value
    result=document.querySelector(".inputResultCheck").value
    cresult=0
    switch (operator){
        case "+":
            cresult=number1+number2;
            break;
        case "-":
            cresult=number1-number2;
            break;
        case "/":
            cresult=number1/number2;
            break;
        case "*":
            cresult=number1*number2;
            break;
    }
    result=Number(result)
    console.log(typeof(number1), typeof(number2),typeof(operator),typeof(result))
    console.log(cresult)
    resultCheck=""
    if(cresult==result){
        resultCheck="Richtig"
    }
    else{
        resultCheck=`Falsch! Die Lösung lautet: ${cresult}`
    }
    resultCheckLabel=document.querySelector(".resultCheck")
    console.log(resultCheck)
    
    
    labelCheck=checkLabel()
    if (labelCheck){
        resultLabel.innerHTML=resultCheck
    }
    else{
    createLabel()
    resultLabel.innerHTML=resultCheck
}
}

function checkLabel(){
    labelExists=document.querySelector(".checkLabel")
    if (labelExists != null)
        {
       return true
    }
    else return false
}
function createLabel(){
    resultLabel=document.createElement("label")
    resultLabel.setAttribute("class","checkLabel")
    
    
    resultCheckLabel.appendChild(resultLabel)
}

function evaluationSW(){
    document.querySelector(".labelErrors").style.visibility = "hidden"
    document.querySelector(".errorMessage").style.visibility = "hidden"
    tasks=document.querySelector(".inputAll").value
    tasks=Number(tasks)
    rightAnswers=document.querySelector(".inputRight").value
    rightAnswers=Number(rightAnswers)
    wrongAnswersInput=document.querySelector(".inputWrong")
    taskPoints=document.querySelector(".labelPoints")
    errorMessage=0
    console.log(rightAnswers)
    console.log(tasks)
    console.log(rightAnswers>tasks)
    
    if(tasks==0){
        errorMessage="Fehler: Zu wenig Aufgaben"
    
    }
    else if (rightAnswers>tasks){
        errorMessage="Fehler: Mehr Antworten als Aufgaben"
    }
    if (errorMessage!=0){
        document.querySelector(".errorMessage").innerHTML=errorMessage;
        document.querySelector(".errorMessage").style.visibility = "visible"
    }
    else{
    wrongAnswersValue=Number(tasks)-Number(rightAnswers)
    

    wrongAnswersInput.innerHTML=wrongAnswersValue
    points=rightAnswers/tasks*100
    points=Math.round(points)
    taskPoints.innerHTML=points
    console.log(points)
    if(points >=96){
            grade="sehr gut (1)"
        }
    else if(points >=79){
        
            grade="gut (2)"
        }
    
    else if( points >=59){
            grade="befriedigend(3)"
        }
    else if(points >=40){
            grade="ausreichend(4)"
        }
    else if(points >=20){
            grade="mangelhaft(5)"
        }
     else {
            grade="ungenügend(6)"
        }
    }

    console.log("Wrong Answers: ",wrongAnswersValue)
    console.log(wrongAnswersValue != 0)
    if (wrongAnswersValue != 0){
        document.querySelector(".labelErrors").style.visibility = "visible"
    }
    gradeLabel=document.querySelector(".grade")
    gradeLabel.innerHTML=grade
}

function getInputEq(){
    minValueEq=Number(document.querySelector(".minValueEq").value)
    maxValueEq=Number(document.querySelector(".maxValueEq").value)

    if (minValueEq > maxValueEq){
        t=minValueEq;
        minValueEq=maxValueEq;
        maxValueEq=t;
    }
    return minValueEq, maxValueEq
}

function getRandomArbitrary(min, max){
  
    randNum=Math.floor(Math.random()*(max-min)+min);
    return randNum
}

function createEquation(){
    getInputEq()
    valuea= getRandomArbitrary(minValueEq, maxValueEq)
    valueb=getRandomArbitrary(minValueEq, maxValueEq)
    valuec=getRandomArbitrary(minValueEq, maxValueEq)
    valued=getRandomArbitrary(minValueEq, maxValueEq)
    if(valuea<0){
        valuea= "("+valuea+")"
    }
    if(valueb<0){
        valueb= "("+valueb+")"
    }
    if(valuec<0){
        valuec= "("+valuec+")"
    }
    if(valued<0){
        valued= "("+valued+")"
    }
    console.log("a= ",valuea,",b= ",valueb,",c= ",valuec, ",d= ", valued)
    chosenOption=document.querySelector(".choice").value
    if(chosenOption=="Gleichungen"){
        if(valuea==0){
            valuea=1
            console.log("newa= ",valuea)
        }
    answer=`Die erzeugte Gleichung lautet: ${valuea}x²+${valueb}x+${valuec}=${valued}`}
    else {
        while (valueb==0){
            valueb=getRandomArbitrary(minValueEq, maxValueEq)
            console.log("newb= ",valueb)
        }
        while(valued==0){
            valued=getRandomArbitrary(minValueEq, maxValueEq)
            console.log("newd= ",valued)
        }
        answer=`Der erzeugte Bruch lautet: ${valuea}/${valueb},${valuec}/${valued}`
    }
    document.querySelector(".resultEq").innerHTML=answer
    
}