const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("You must write something!");
    return;
  }

  // Check for duplicate
  const existingTasks = [...listContainer.children].map(
    li => li.textContent.replace("×", "").trim()
  );
  if (existingTasks.includes(taskText)) {
    alert("Task already exists!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  let span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      e.target.parentElement.remove();
      saveData();
    }
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
