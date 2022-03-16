const range = document.querySelector("#input1"); 
const guessNumber = document.querySelector("#input2"); 
const usersubmit = document.querySelector("#submit");
const result = document.querySelector("#js-result");

function handleGuessSubmit(event) {
    event.preventDefault();

    //guessNumber와 range 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
    if(guessNumber === "" && range === "") {
        return;
    }

    const maxNum = parseInt(range.value, 10); //10진수
    const randomNum = Math.ceil(Math.random() * maxNum);
    const userNum = parseInt(guessNumber.value, 10);
    const resultSpan = result.querySelector("span");

    resultSpan.innerHTML = 
    `You chose: ${userNum}, the machine chose: ${randomNum}.<br>
    <strong> ${userNum === randomNum ? "You  won!" : "You  lost!"} <strong>`;
    
}

usersubmit.addEventListener("submit", handleGuessSubmit);