today=new Date()

let year = new Date().toLocaleString('de-de', {  year: 'numeric' });
let month = new Date().toLocaleString('de-de', {  month: 'long' });
let weekday = new Date().toLocaleString('de-de', {  weekday: 'long' });
let day=today.getDate()
let monthOld=today.getMonth()+1
document.querySelector("#year").innerHTML=year
function getBirthday(){
birthday=document.querySelector(".birthdayDay").value
birthday=parseInt(birthday)
birthmonth=document.querySelector(".birthdayMonth").value
birthmonth=parseInt(birthmonth)
birthyear=document.querySelector(".birthdayYear").value
difyear=year-birthyear
difmonth=monthOld-birthmonth
difday=day-birthday
console.log(difyear, difmonth, difday)
if((difmonth==0)&&(difday==0)){
    alert("Du hast heute Geburtstag. Herzlichen Glückwunsch!")
}
else if ((difmonth <=0) && (difday <=0))
    {
        difyear=difyear-1
        difmonth=12+difmonth
        difday=30+difday
    }
  
else if (difday <=0){
    difday=30+difday

}
else if(difmonth<=0){
    difmonth=12+difmonth
    
}

alert(`Du bist ${difyear} Jahre alt`)
if(difyear <18){
    alert("Du bist minderjährig!")
}
else{
    alert("Du bist volljährig")



console.log(difyear, difmonth, difday)
}
}