function project(){
const forms = document.querySelector("form");
const newTaskButton = document.querySelector(".newTaskButton");
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.querySelector(".taskList");
function handleEnter() {
    const taskTitle = newTaskInput.value;
    if (taskTitle !== ''){
      const content=document.createElement('span')
      const newTaskItem = document.createElement('li');
      const delIcon=document.createElement('button');
      const editIcon=document.createElement('button');
      const itemIcons=document.createElement('div');
      content.classList.add('content')
      delIcon.classList.add('fas','fa-trash');
      editIcon.classList.add('far','fa-edit');
      newTaskItem.classList.add('newTaskItem')
      itemIcons.classList.add('itemIcons')
      content.textContent = taskTitle;
      itemIcons.appendChild(editIcon);
      itemIcons.appendChild(delIcon);
      newTaskItem.appendChild(content);
      newTaskItem.appendChild(itemIcons);
      taskList.appendChild(newTaskItem);
      newTaskInput.value = '';
      forms.classList.add('hidden');
    }
  }
newTaskButton.addEventListener('click', () => {
  forms.classList.toggle('hidden');
});
newTaskInput.addEventListener('keydown', (e) => {  
    if (e.key==='Enter'){
        e.preventDefault()
        handleEnter();}
});}
export {project}
