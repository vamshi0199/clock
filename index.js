function currentTime(){
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var session="AM";
    if(hours>12)
    session="PM";
    
      
    
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    hours=hours>12?hours-12:hours;
    
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("mns").innerHTML=minutes;
    document.getElementById("secs").innerHTML=seconds;
    document.getElementById("sess").innerHTML=session;
    
    
    setTimeout(function(){currentTime()},1000)
    
    }
    currentTime();
    function gather(){
    var x=document.getElementById("wake").value;
    var y=document.getElementById("lunch").value;
    var z=document.getElementById("dinner").value;
    var a=document.getElementById("ex");
        hours=new Date().getHours();
            if(hours==x)
            {
        a.src="wakeup_image@2x.png"
        document.getElementById("tex1").innerHTML="LET'S HAVE SOME BREAKFAST";
        document.getElementById("text").innerHTML="GOOD MORNING !!";
            }
            else if(hours==y)
            {
        a.src="lunch_image@2x.png";
        document.getElementById("text1").innerHTML="LET'S HAVE SOME LUNCH"
        document.getElementById("text").innerHTML="GOOD AFTERNOON !!"
            }
            else if(hours==z)
            {
        a.src="goodnight_image.png";
        document.getElementById("text1").innerHTML="LET'S HAVE SOME DINNER"
        document.getElementById("text").innerHTML="GOOD NIGHT !!"
            }
        
     var x=document.getElementById("newdiv");
        x.style.display="block";
    var wakeTime=document.getElementById("wake");
    var lunchTime=document.getElementById("lunch");
    var dinnerTime=document.getElementById("dinner");
        
    var element=wakeTime.options[wakeTime.selectedIndex].text;
    var element1=lunchTime.options[lunchTime.selectedIndex].text;
    var element2=dinnerTime.options[dinnerTime.selectedIndex].text;
    x.innerText="wake up time:"+ " "+element+"\n"+"lunch time:"+" "+element1+"\n"+"dinner time:"+" "+element2;
    }















