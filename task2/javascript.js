/*---This JavaScript code is for a simple to-do list application. 
It allows users to add tasks, mark them as completed, and clear completed or all tasks */

//create variables to access HTML elements.
// Get references to the input field, buttons, and task list.
// Add event listener to the "Add Task" button to add a new task to the list.
// When the "Add Task" button is clicked, check if the input is empty. If it is, show an alert.
// Otherwise, create a new list item with the task text and add it to the task list. Clear
// When a task is clicked, toggle the "completed" class to mark it as completed.
// Add event listener to the "Clear Completed" button to remove all completed tasks from the list.
// Add event listener to the "Clear All" button to remove all tasks from the list.
// Create a function to update the task counts and set it to run every second using setInterval.

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  }
});

const clearCompletedButton = document.getElementById("clearCompletedButton");
clearCompletedButton.addEventListener("click", () => {
  const completedTasks = document.querySelectorAll("li.completed");
  completedTasks.forEach((task) => {
    task.remove();
  });
});

const clearAllButton = document.getElementById("clearAllButton");
clearAllButton.addEventListener("click", () => {
  const allTasks = document.querySelectorAll("li");
  allTasks.forEach((task) => {
    task.remove();
  });
});

const taskCount = document.getElementById("taskCount");
const completedCount = document.getElementById("completedCount");
function updateCounts() {
  const totalTasks = document.querySelectorAll("li").length;
  const completedTasks = document.querySelectorAll("li.completed").length;
  taskCount.textContent = `Total Tasks: ${totalTasks}`;
  completedCount.textContent = `Completed Tasks: ${completedTasks}`;
}
setInterval(updateCounts, 1000);

const filterContainer = document.getElementById("filterContainer");

filterContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const filter = e.target.id;

    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach((task) => {
      switch (filter) {
        case "all":
          task.style.display = "flex";
          break;

        case "completed":
          if (task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
          break;

        case "pending":
          if (!task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
          break;
      }
    });
  }
});
updateCounts();
