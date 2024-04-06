const forms = document.querySelector("form");
const newTaskButton = document.querySelector(".newTaskButton");
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.querySelector(".taskList");
function handleEnter() {
    const taskTitle = newTaskInput.value;
    if (taskTitle !== '') {
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskTitle;
      taskList.appendChild(newTaskItem);
      newTaskInput.value = '';
      forms.classList.add('hidden');
    }

  }

newTaskButton.addEventListener('click', () => {
  forms.classList.toggle('hidden');
});

newTaskInput.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (e.key==='Enter'){handleEnter();}
  
});
