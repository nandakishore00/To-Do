//function for creating the functionalities for sidebar
function project(){
const forms = document.querySelector("form");
const mainContent=document.querySelector('mainContent')
const newButton = document.querySelector(".newButton");
const newTaskInput = document.querySelector('.newTaskInput');
const taskList = document.querySelector(".taskList");
const addTaskButton=document.querySelector('.addTaskButton');
// event listeners to handle new button,edit and delete functioanlities in side bar
newButton.addEventListener('click',()=>{
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
       //Flag Prevents the value getting erased if the edit button is pressed more than once
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
function handleEnter() {
  const newTaskItem = document.createElement('button');    
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
    handleTaskItem(newTaskItem);
  }
}
//to handle main-content
function handleTaskItem(taskItem) {
  taskItem.addEventListener('click',()=>
  {const newTaskButton = document.createElement('button');
  newTaskButton.type = 'button';
  newTaskButton.classList.add('newTaskButton', 'addTask');
  newTaskButton
  // Create the h3 element
  const h3Element = document.createElement('h3');
  h3Element.style.fontSize = 'medium';
  h3Element.style.paddingRight = '13px';
  h3Element.textContent = 'ADD TASK';
  console.log('im clicked')
  // Create the + symbol
  const iElement = document.createElement('i');
  iElement.classList.add('fas', 'fa-plus');
  iElement.style.padding = '2px';
  iElement.style.fontSize = 'small';
  mainContent.appendChild(newTaskButton)
  });
}
}
export {project}
