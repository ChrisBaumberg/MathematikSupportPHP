function getInputFromForm(){

    a= document.querySelector(".startValueChallenge").value
    b= document.querySelector(".endValueChallenge").value
    console.log(a)
    console.log(b)
    a=parseInt(a)
    b=parseInt(b)
    if(a>b){
        t=a;
        a=b;
        b=t;
    }
    return [a,b]
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
function calculationChallenge(){
    [minValue, maxValue] = getInputFromForm();
    num1 = getRandomArbitrary(minValue, maxValue);
    num2 = getRandomArbitrary(minValue, maxValue);
    operator = getOperator();
    
}




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