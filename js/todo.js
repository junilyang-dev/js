const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDos = [];
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveToDos(){
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  toDos.push(toDoValue);
  paintToDo(toDoValue);
  saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit);