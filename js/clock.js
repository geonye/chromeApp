const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); //현재 날짜 & 시간 가져옴

    //00:00:00 형태로 만들어주기 위해 String으로 값 변환 후 padStart() 사용
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
    
getClock();
setInterval(getClock, 1000);  //1초마다 getClock function 호출