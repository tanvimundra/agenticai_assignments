function addTask() {
  const input = document.getElementById("taskInput");
  const message = document.getElementById("message");
  const taskText = input.value.trim();

  if (taskText === "") {
    message.textContent = "Task cannot be empty!";
    message.className = "error";
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const btnDiv = document.createElement("div");
  btnDiv.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
    message.textContent = "Task deleted.";
    message.className = "success";
  };

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  document.getElementById("taskList").appendChild(li);

  message.textContent = "Task added successfully!";
  message.className = "success";

  input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
