


setInterval(function date1(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess = document.getElementById("session");
    var ab = hour - 12 ;

 if (hour > 12){
  hour = ab ;
 }

    document.getElementById("hour").innerText = hour;
    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;


    if (hour >= 12){
        sess.innerText = "PM";
       
    }else{
        sess.innerText = "AM";
    }
    



}, 1000);