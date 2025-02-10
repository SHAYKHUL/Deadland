document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.querySelector(".task-list");
    const taskPopup = document.getElementById("taskPopup");
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");

    let tasks = [];
    
    // Generate 50 Tasks
    for (let i = 1; i <= 50; i++) {
        let task = document.createElement("div");
        task.classList.add("task");
        if (i !== 1) task.classList.add("locked"); // Lock all except first
        task.innerText = `Task ${i}`;
        task.dataset.taskId = i;
        task.addEventListener("click", () => openTask(i));
        taskList.appendChild(task);
        tasks.push(task);
    }

    function openTask(taskId) {
        if (tasks[taskId - 1].classList.contains("locked")) return;
        
        taskTitle.innerText = `Task ${taskId}`;
        taskDescription.innerText = `Complete this challenge to proceed.`;
        taskPopup.style.display = "block";
        
        // Unlock next task
        if (taskId < 50) tasks[taskId].classList.remove("locked");
    }

    function closePopup() {
        taskPopup.style.display = "none";
    }

    window.closePopup = closePopup;
});
