var Qustionlist=[]
var Ansawerlist=[]
var Questionnumber=0
var Ansawer=""
var Wrongquestionlist=[]
var Wrongansawerlist=[]
var numqeustions=10
var alowedwrong=1
var alowedmin =1
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

// function key(number){
//     Ansawer=Ansawer+number
//     document.getElementById("ansawer").innerText=Ansawer
//     continuetime()
// }
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
    
    erase()

    Questionnumber++
    defineprocces()
    if(Qustionlist.length <= Questionnumber){
        endquiz()
        return
    }
    document.getElementById("question").innerText=Qustionlist[Questionnumber]
    document.getElementById("nextquestion").innerText=Qustionlist[Questionnumber+1]
    if(Qustionlist.length-1 === Questionnumber){
        document.getElementById("nextquestion").innerText=""
    }
}
function defineprocces(){
    if(Questionnumber>=numqeustions){
        return
    }
    document.getElementById("process").innerText=`${Questionnumber+1}/${numqeustions}`
}


function endquiz(){
    time("stop")
    var msg
    if (houers>0){
        msg= "Um das nächste Level zu ereichen musst du schneller sein"
    }else if(Wrongquestionlist.length <= alowedwrong && minutes < alowedmin){
       msg="level up"
    }else if(Wrongquestionlist.length >= alowedwrong && minutes >= alowedmin ){
        msg= "Um das nächste Level zu ereichen musst du schneller sein und weniger Fehler machen"
    }else if(Wrongquestionlist.length <= alowedwrong ){
          msg= "Um das nächste Level zu ereichen musst du schneller sein"
    }else if(minutes < alowedmin){
        msg= "Um das nächste Level zu ereichen musst du weniger Fehler machen"
  }
    alert(`Du hast ${Wrongquestionlist.length} Fehler in ${minutes} Minuten und ${seconds} Sekunden gemacht. ${msg}`)
    document.getElementById("question").innerText=Wrongquestionlist;
    
}
    

function key1(){
    Ansawer=Ansawer+1
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key2(){
    Ansawer=Ansawer+2
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key3(){
    Ansawer=Ansawer+3
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key4(){
    Ansawer=Ansawer+4
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key5(){
    Ansawer=Ansawer+5
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key6(){
    Ansawer=Ansawer+6
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key7(){
    Ansawer=Ansawer+7
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key8(){
    Ansawer=Ansawer+8
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key9(){
    Ansawer=Ansawer+9
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
function key0(){
    Ansawer=Ansawer+0
    document.getElementById("ansawer").innerText=Ansawer
    continuetime()
}
