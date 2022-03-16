const range = document.querySelector("#input1");
const guessNumber = document.querySelector("#input2");
const usersubmit = document.querySelector("#submit");
const compareSentence = document.querySelector("#compare");
const resultSentence = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

function compare(event) {
    event.preventDefault();
    const maxNum = parseInt(range.value, 10); //10진수
    const userNum = parseInt(guessNumber.value, 10);
    const randomNum = Math.ceil(Math.random() * maxNum);
    result(userNum, randomNum);  //결과 출력 함수 호출
}

//결과 출력 함수
function result(userNum, randomNum) {
    if(userNum !== null){
        compareSentence.classList.remove(HIDDEN_CLASSNAME);
        resultSentence.classList.remove(HIDDEN_CLASSNAME);
        compareSentence.innerHTML = `You chose: ${userNum}, the machine chose: ${randomNum}.`;
        if(userNum === randomNum) { 
            resultSentence.innerHTML = "You  won!";
        } else {
            resultSentence.innerHTML = "You  lost!";
        }
    }
}

usersubmit.addEventListener("submit", compare);