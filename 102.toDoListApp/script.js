const container = document.querySelector(".container");
const newTaskContainer = document.querySelector(".new-task-container .box");
const newTaskInput = document.querySelector("#new-task");
const newTaskSubmit = document.querySelector("#addTask");
const mainUl = document.querySelector("#items");

let newTaskBackend = function (task) {
  let addList = document.createElement("li");
  let addLabel = document.createElement("label");
  let addCheckbox = document.createElement("input");
  addCheckbox.type = "checkbox";

  label.innerText = task;
  addList.appendChild(addCheckbox);
  addList.appendChild(addLabel);

  return addList;
};

let addBtn = function myFunction{
    newTaskSubmit.addEventListener('click', function(){
        let addListMain = createTask(newTask.value);
        mainUl.appendChild(addListMain);
        newTask.value = "";
    });
};
myFunction();
