
function getCurrentTime(){
    
    if (!isTimeToStop){
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        
        if (hour < 10)
            hour = "0" + hour;
        if (minute < 10)
            minute = "0" + minute;
        if (second < 10)
            second = "0" + second;
        
        let clock = document.querySelector(".сlock-container");
        clock.innerText = hour + " : " + minute + " : " + second;
    }   
}

function initButtonEvent(type){
    const button = document.getElementById(type);
    button.addEventListener("click", function(){
        if (type === "start") {
            isTimeToStop = false;
            document.querySelector("#notifications-container").appendChild(createMessage("Clock was started", "alert alert-success"));
            }
        else {
            isTimeToStop = true;
            document.querySelector("#notifications-container").appendChild(createMessage("Clock was stopped", "alert alert-danger"));
            }
        });
}

function createMessage(text, type) {
    const messageEl = document.createElement('div');
    messageEl.className = type;

    const closerEl = document.createElement('span');
    closerEl.className = 'close';
    closerEl.innerText = 'x';
    closerEl.addEventListener("click", function(event){
        const element = event.target.closest('div.alert');
        element.remove();
    });
    
    const titleEl = document.createElement('h4');
    titleEl.innerText = text;

    messageEl.appendChild(closerEl);
    messageEl.appendChild(titleEl);
    return messageEl
}


let isTimeToStop = false;

initButtonEvent("start");
initButtonEvent("stop");

getCurrentTime();
setInterval(getCurrentTime, 1000);
