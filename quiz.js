var Qustionlist=[]
var Ansawerlist=[]
var Questionnumber=0
var Ansawer=""
var Wrongquestionlist=[]
var Wrongansawerlist=[]
var numqeustions=10
function definequestion(){
    Qustionlist=[];
    Ansawerlist=[];
    for(i=0;i<numqeustions;i++){
        var num1= Math.floor(Math.random()*10+1);
        var num2= Math.floor(Math.random()*10+1);
        var Question = `${num1} + ${num2} = `;
        var Ansawer = num1+num2;
        Qustionlist.push(Question);
        Ansawerlist.push(Ansawer);
    }
}
definequestion()
defineprocces()

document.getElementById("question").innerText=Qustionlist[0]
document.getElementById("nextquestion").innerText=Qustionlist[1]

function key(number){
    continuetime()
    Ansawer=Ansawer+number
    document.getElementById("ansawer").innerText=Ansawer
}
function erase(){
    Ansawer=""
    document.getElementById("ansawer").innerText=Ansawer
}
function done(){
    if (Ansawer==Ansawerlist[Questionnumber]){
       console.log("yes") 
    }else{
        Wrongquestionlist.push(Qustionlist[Questionnumber])
        Wrongansawerlist.push(Ansawer[Questionnumber])
    }
    lnq()
}
function lnq(){
    continuetime()
    defineprocces()
    erase()

    Questionnumber++
    if(Qustionlist.length <= Questionnumber){
        document.getElementById("question").innerText=Wrongquestionlist;
        time("stop")
        return
    }
    document.getElementById("question").innerText=Qustionlist[Questionnumber]
    document.getElementById("nextquestion").innerText=Qustionlist[Questionnumber+1]
    if(Qustionlist.length-1 === Questionnumber){
        document.getElementById("nextquestion").innerText=""
    }
}
function defineprocces(){
    document.getElementById("process").innerText=`${Questionnumber+1}/${numqeustions}`
}


