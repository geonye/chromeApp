const clockTitle = document.querySelector(".js-clock");

function xmasTimer() {
    const setDate = new Date('2022-12-25T00:00:00');

    //현재 날짜 & 시간 가져온다
    const now = new Date(); 
    const diff = setDate - now;

    const day = String(Math.floor(diff/(1000*60*60*24))).padStart(2, "0");
    const hours = String(Math.floor(diff/(1000*60*60)%24)).padStart(2, "0");
    const minutes = String(Math.floor(diff/(1000*60)%60)).padStart(2, "0");
    const seconds = String(Math.floor(diff/1000%60)).padStart(2, "0");
    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

xmasTimer();
setInterval(xmasTimer, 1000);