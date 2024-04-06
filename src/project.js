function project(){
const forms = document.querySelector("form");
const newTaskButton = document.querySelector(".newTaskButton");
const newTaskInput = document.querySelector('.newTaskInput');
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
});
var flag=true
taskList.addEventListener('click', (event) => {
    const e=event.target.parentNode
    if (event.target.className==='fas fa-trash'){
        e.previousElementSibling.parentNode.remove()
    }
    
    else if (event.target.className==='far fa-edit') {
        if(flag){
        flag=false
        const contentElement=e.parentNode.childNodes[0]
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('newTaskInput')
        console.log(contentElement)
        editInput.value = contentElement.textContent;
        contentElement.replaceWith(editInput);
        editInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            console.log('asd',editInput.value)
            event.preventDefault();
            // contentElement.textContent = editInput.value;
            contentElement.textContent=editInput.value
            editInput.replaceWith(contentElement)
            flag=true
          
    }

  })}
  ;}
});}

export {project}
