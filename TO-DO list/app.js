function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => li.remove();
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
