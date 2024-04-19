function project(){
const forms = document.querySelector("form");
const newTaskItem = document.createElement('button');
const newTaskButton = document.querySelector(".newTaskButton");
const newTaskInput = document.querySelector('.newTaskInput');
const taskList = document.querySelector(".taskList");
const addTask=document.querySelector('.addTask')
// event listeners to handle new button,edit and delete functioanlities in side bar
newTaskButton.addEventListener('click',()=>{
  forms.classList.toggle('hidden');
})
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
       //Flag Prevents editing the value if the edit button is pressed multiple times
       if(flag){ 
        flag=false
        const contentElement=e.parentNode.childNodes[0]
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('newTaskInput')
        editInput.value = contentElement.textContent;
        contentElement.replaceWith(editInput);
        editInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            event.preventDefault();
            contentElement.textContent=editInput.value
            editInput.replaceWith(contentElement)
            flag=true
          
              }
  })
  ;}

}});

// function to handle enter key 
newTaskItem.addEventListener('click',()=>{addTask.classList.toggle('hidden')})
function handleEnter() {
  const title = newTaskInput.value;
  const taskTitle=title.toUpperCase()
  if (taskTitle !== ''){
    const content=document.createElement('span')
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
}

export {project}
