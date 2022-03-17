const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;  
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
    toDos.push(newToDo);  //toDos 배열에 newToDo를 push 
    paintToDo(newToDo);
    saveToDos(); //ToDos 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit); 