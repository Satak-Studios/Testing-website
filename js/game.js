let deadline = new Date("april 30, 2024 6:45:00").getTime();
function checkEvent() {
    let now = new Date().getTime;
    let t = deadline - now;
    let days = Math.floor(t/(1000*60*60*24));
    let hours = Math.floor((t%1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor((t%1000*60*60)/(1000*60));
    let seconds = Math.floor((t%1000*60)/(1000));

    if(t<0){
        document.getElementById('counter').innerHTML = "Expired!";
    }else{
        document.getElementById('counter').innerHTML = days + "d " + hours + "hr " + minutes + "min " + seconds + "sec ";
    }
}