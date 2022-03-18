const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //업데이트가 가능하게 let으로 설정

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id);
    //toDo는 toDos DB에 있는 요소 중 하나
    //클릭한 li.id와 다른 toDo는 남겨둠
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDos();  
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;  
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //li안에 span을 넣어준다.
    li.appendChild(span);  
    li.appendChild(button);
    //span의 텍스트 = handleToDoSubmit에서 온 newToDo 텍스트
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";  //enter치면 빈칸으로 바뀜
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);  //toDos 배열에 newToDo를 push 
    paintToDo(newTodoObj);
    saveToDos(); //ToDos 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY); 
 
if(savedToDos !== null) {
    //localstorage에 있는 string을  js object로 변경
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}