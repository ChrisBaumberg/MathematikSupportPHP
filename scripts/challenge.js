function evaluation(){

    tasks=document.querySelector(".inputAll")
    rightAnswers=document.querySelector(".inputRight")

    wrongAnswersInput=document.querySelector(".inputWrong")
    taskPoints=document.querySelector(".labelPoints")
    wrongAnswersValue=numoftasks-points
    

    wrongAnswersInput.value=wrongAnswersValue
    challengepoints=points/numoftasks*100
    challengepoints=Math.round(challengepoints)
    taskPoints.innerHTML=challengepoints
    

    
    if(challengepoints >=96){
            grade="sehr gut (1)"
        }
    else if(challengepoints >=79){
        
            grade="gut (2)"
        }
    
    else if( challengepoints >=59){
            grade="befriedigend(3)"
        }
    else if(challengepoints >=40){
            grade="ausreichend(4)"
        }
    else if(challengepoints >=20){
            grade="mangelhaft(5)"
        }
     else {
            grade="ungenügend(6)"
        }
    
        tasks.value=numoftasks
    rightAnswers.value=points
    gradeLabel=document.querySelector(".grade")
    gradeLabel.innerHTML=grade
}
function getInput(){
    startvalue=document.querySelector(".startValue").value
    endvalue=document.querySelector(".endValue").value
    startvalue=Number(startvalue)
    endvalue=Number(endvalue)
    numoftasks=document.querySelector(".numberOfTasks").value
    console.log("Startwert: ",startvalue)
    console.log("Endwert: ",endvalue)
    console.log(typeof(startvalue))
    console.log(typeof(endvalue))
    console.log(`${startvalue}>${endvalue}?: `,startvalue>endvalue)
    if (startvalue>endvalue){
        t=startvalue
        startvalue=endvalue
        endvalue=t
    }
    checkbox=document.querySelector(".checkBasic")
    return startvalue, endvalue, numoftasks
}
function getRandomInt(){
    return Math.floor(Math.random()*4);
}

function deleteResults(){
    wrongResults=document.querySelector(".wrongResults")
    rightResults=document.querySelector(".rightResults")
    console.log("+",rightResults)
    console.log("-",wrongResults)
    while (rightResults.firstChild)
        {rightResults.removeChild(rightResults.lastChild)

        }
 
   /* deleteButton=document.querySelector(".buttonDelete")
    deleteButton.disabled = true*/
}

function getRandomArbitrary(min, max){
  
    randNum=Math.floor(Math.random()*(max-min)+min);
    return randNum
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
    deleteResults()
    startvalue=getInput()
    endvalue=getInput()
    numoftasks=getInput()
    list=document.querySelector(".taskList")
    liste=[]
    points=0
    mistakes=0
    for (i=0; i<numoftasks; i=i+1){
        taskoperation=getOperator()
        num1=getRandomArbitrary(startvalue,endvalue)
        
        num2=getRandomArbitrary(startvalue,endvalue)
        console.log("Erste Zahl: ",num1,"Zweite Zahl: ",num2)
        j=0
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
        
        while ((taskoperation == "/") && (num2 ==0)){
                    j=j+1
                    num2=getRandomArbitrary(startvalue,endvalue)
                    console.log(`Aufgabe ${i} hatte ${j} hatte eine 0 als Divisor!`)
        }
        switch(taskoperation){
            case "+":
                result=num1+num2
                break
            case "-":
                result=num1-num2
                break
            case "*":
                result=num1*num2
                break
            case "/":
                result=num1/num2
                break
        }
        if (num1 < 0){
            num1text=`(${num1})`
        }
        else {
            num1text = num1
        }
        if (num2 <0){
            num2text=`(${num2})`
        }
        else {
            num2text = num2
        }
        console.log(`Aufgabe ${i+1}/${numoftasks}: Wieviel ist ${num1text} ${taskoperation} ${num2text}?`)
        resultCheck=prompt(`Aufgabe ${i+1}/${numoftasks}: Wieviel ist ${num1text} ${taskoperation} ${num2text}?`)
        resultCheck = Number(resultCheck)
        intCheck=Number.isInteger(result)
        console.log("Integer? ",intCheck)
        resultCopy = result
        resultDigets = String(resultCopy).split(".")[1]
      
        if (resultDigets != 0){
            resultCheck = resultCheck.toFixed(2)
        }
        if (!intCheck){
        result=result.toFixed(2)
        }
        
        if (result==resultCheck){
            points=points+1
            
            rightResults=document.querySelector(".rightResults")
            
            resultLabel=document.createElement("label")
            resultLabel.setAttribute("class", `checkLabel${i}`)
            resultLabel.innerHTML=`Aufgabe ${i+1}: ${num1text} ${taskoperation} ${num2text} = ${result}<br>`
            rightResults.appendChild(resultLabel)
            
        }
        else{
            mistakes=mistakes+1
            rightResults=document.querySelector(".rightResults")
            resultLabel=document.createElement("label")
            resultLabel.setAttribute("class", `checkLabel${i}`)
            resultLabel.innerHTML=`Aufgabe ${i+1}: ${num1text} ${taskoperation} ${num2text} = <span class="wrongAnswer">${resultCheck}  Falsch!</span> Richtige Antwort: ${result}<br>`
            rightResults.appendChild(resultLabel)
            
        }
        rightResults.style.visibility = "visible"
        
        console.log("Punkte: ",points)
        console.log("Fehler: ", mistakes)
        
    }
        /*deleteButton=document.querySelector(".buttonDelete")
        deleteButton.disabled = false*/
    evaluation()
   
   }