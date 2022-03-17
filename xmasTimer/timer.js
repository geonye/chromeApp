const clockTitle = document.querySelector(".js-clock");

function xmasTimer() {

    //크리스마스 날짜를 얻기 위한 코드
    const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
    //현재 시간을 생성
    const now = new Date();
    const diff = xmasDay - now;
        
    //1초는 1000ms, 1시간은 60분, 1분은 60초, 하루는 24시간으로 나눔
    const secondsInMs = Math.floor(diff/1000);
    const minutesInMs = Math.floor(secondsInMs/60);
    const hoursInMs = Math.floor(minutesInMs/60);
    const days = Math.floor(hoursInMs/24);

    //출력되는 값들은 크리스마스까지 남은 일수, 남은 시간, 남은 분, 남은 초이므로 
    //나머지 값을 얻을 수 있는 모듈러(%)연산을 사용
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;

    //남은 시간이 10보다 작아질 경우 앞에 0을 붙여 두 자리로 나타냄
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

    clockTitle.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

xmasTimer();
setInterval(xmasTimer, 1000);