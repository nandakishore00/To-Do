//js file for creating the functionalities for sidebar
import { tasksByProject } from './tasksByProject.js';
import { task } from './toDoContainer.js';
function project(){
const forms = document.querySelector("form");
const mainContent=document.querySelector('.main-content')
const newButton = document.querySelector(".newButton");
const newTaskInput = document.querySelector('.newTaskInput');
const projectList = document.querySelector(".projectList");
var newTaskItem=document.createElement('button');  
var taskTitle=''
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
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('fa-trash')) {
    const taskItem = event.target.closest('.newTaskItem');
      if (taskItem) {
          taskItem.remove();
      }
  }
    else if (event.target.classList.contains('fa-edit')) {
       //Flag Prevents the value getting erased if the edit button is pressed more than once
       if(flag){ 
        const taskItem = event.target.closest('.newTaskItem');
        flag=false
        const contentElement=taskItem.querySelector('span.content')
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('newTaskInput')
        editInput.value = contentElement.textContent;
        contentElement.replaceWith(editInput);
        editInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            event.preventDefault();
            contentElement.textContent=editInput.value.toUpperCase()
            editInput.replaceWith(contentElement)
            flag=true
              }
  })
  ;}

}});
// function to handle enter key 
function handleEnter() {  
const content=document.createElement('span');
const delIcon=document.createElement('button');
const editIcon=document.createElement('button');
const itemIcons=document.createElement('div');
  newTaskItem = document.createElement('button');  
  taskTitle = newTaskInput.value;
  taskTitle=taskTitle.toUpperCase()
  if (taskTitle !== ''){

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
    projectList.appendChild(newTaskItem);
    newTaskInput.value = '';
    forms.classList.add('hidden');
  
  }
  // if(!tasksByProject[taskTitle]){
  //   tasksByProject[taskTitle]={}
  // }
}

//to handle main-content
document.addEventListener('click', (e) => {
  if (e.target.className === 'newTaskItem') {
    const projectTitle = e.target.innerText;
    displayProjectTasks(projectTitle);
  }
});

function displayProjectTasks(projectTitle) {
  const mainContent = document.querySelector('.main-content');
  const todoList = document.querySelector('.todo-list');
  
  // Clear existing tasks
  todoList.innerHTML = '';

  // Update the project title in the main content
  const titleDiv = mainContent.querySelector('.mainheading div');
  if (titleDiv) {
    titleDiv.textContent = projectTitle;
  } else {
    const newTitleDiv = document.createElement('div');
    newTitleDiv.textContent = projectTitle;
    mainContent.querySelector('.mainheading').appendChild(newTitleDiv);
  }

  // Display tasks for the selected project
  if (tasksByProject[projectTitle] && tasksByProject[projectTitle].tasks) {
    tasksByProject[projectTitle].tasks.forEach(task => {
      const todoItem = createTodoItem(task, projectTitle);
      todoList.appendChild(todoItem);
      console.log('po ra pooka')
    });
  }
  else {
    console.log('No tasks found for project:', projectTitle,tasksByProject);}

  // Add the "ADD TASK" button if it doesn't exist
  let newToDoButton = mainContent.querySelector('.newToDoButton');
  if (!newToDoButton) {
    newToDoButton = createAddTaskButton();
    mainContent.querySelector('.mainheading').appendChild(newToDoButton);
  }
}

function createTodoItem(taskData, projectTitle) {
  const { id, title, description, dueDate, priority } = taskData;
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoItem.setAttribute('data-id', id);
  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.textContent = title;
  todoItem.appendChild(titleElement);

  const descElement = document.createElement('div');
  descElement.classList.add('description');
  descElement.textContent = description;
  todoItem.appendChild(descElement);

  const dateElement = document.createElement('div');
  dateElement.classList.add('due-date');
  dateElement.textContent = dueDate;
  todoItem.appendChild(dateElement);

  const editButton = document.createElement('button');
  editButton.classList.add('far', 'fa-edit');
  todoItem.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('fas', 'fa-trash');
  todoItem.appendChild(deleteButton);

  // Set border color based on priority
  if (priority === 'low') {
    todoItem.style.border = '2px solid red';
  } else if (priority === 'medium') {
    todoItem.style.border = '2px solid orange';
  } else if (priority === 'high') {
    todoItem.style.border = '2px solid green';
  }

  // Add event listeners for edit and delete
  editButton.addEventListener('click', (editEvent) => {
    editEvent.preventDefault();
        const existingData = {
            title: titleElement.textContent,
            description: descriptionElement.textContent,
            dueDate: dateElement.textContent,
            priority: priority
        };
        
        // Remove the current todo-item from the list
        task(editEvent,existingData);
  });

  deleteButton.addEventListener('click', () => {
    todoItem.remove();
    const taskIndex = tasksByProject[projectTitle].tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      tasksByProject[projectTitle].tasks.splice(taskIndex, 1);
    }
  });

  return todoItem;
}

function createAddTaskButton() {
  const newToDoButton = document.createElement('button');
  newToDoButton.classList.add('newToDoButton');
  const h3Element = document.createElement('h3');
  h3Element.textContent = 'ADD TASK';
  h3Element.style.fontSize = 'medium';
  h3Element.style.paddingRight = '13px';
  const iElement = document.createElement('i');
  iElement.classList.add('fas', 'fa-plus');
  iElement.style.padding = '2px';
  iElement.style.fontSize = 'small';
  newToDoButton.appendChild(h3Element);
  newToDoButton.appendChild(iElement);
  newToDoButton.addEventListener('click', (event) => {
    task(event);
  });
  return newToDoButton;
}
}
export {project}












// document.addEventListener('click',(e)=>
//   { 
//     if(e.target.className==='newTaskItem')
//     {
//     // var oldChild=document.createElement('div')
//     const newToDoButton = document.createElement('button');
//     const addItemDiv=document.querySelector('.mainheading');
//     const titleDiv=document.createElement('div');
//     const h3Element = document.createElement('h3');
//     const iElement = document.createElement('i');
//     newToDoButton.type = 'button';
//     newToDoButton.classList.add('newToDoButton');
//     titleDiv.textContent=e.target.innerText;
//     // Create the h3 for ADDTASK
    
    
    
//     //instead of appending child to mainCotnent(appending will keep on adding the h3& add task button) replace child everytime we click on the project button
//     if (addItemDiv.childNodes.length>1) {
//       addItemDiv.childNodes[0].innerText=e.target.innerText
//     }
    
//     else{
//       h3Element.style.fontSize = 'medium';
//     h3Element.style.paddingRight = '13px';
//     h3Element.textContent = 'ADD TASK';
//     // Create the + symbol
    
//     iElement.classList.add('fas', 'fa-plus');
//     iElement.style.padding = '2px';
//     iElement.style.fontSize = 'small';
//     newToDoButton.appendChild(h3Element);
//     newToDoButton.appendChild(iElement);
//     // addItemDiv
//     addItemDiv.appendChild(titleDiv);
//     addItemDiv.appendChild(newToDoButton);
      
//     }
//     const title=e.target.innerText
//     // if (!(tasksByProject[title])) {
//     //   tasksByProject[title] = {};

//     // }
//     if(mainContent.childNodes[2]){
//       mainContent.childNodes[2].remove()
//     }
//     console.log(mainContent.childNodes,'after')
//       const children =tasksByProject
      
//       children.forEach((child)=>{
//         mainContent.appendChild(child)})
//     newToDoButton.addEventListener('click',(event)=>{task(event)})
//   }
  
// });
