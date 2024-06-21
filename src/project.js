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

document.addEventListener('click',(e)=>
  { 
    if(e.target.className==='newTaskItem')
    {
    // var oldChild=document.createElement('div')
    const newToDoButton = document.createElement('button');
    const addItemDiv=document.querySelector('.mainheading');
    const titleDiv=document.createElement('div');
    const h3Element = document.createElement('h3');
    const iElement = document.createElement('i');
    newToDoButton.type = 'button';
    newToDoButton.classList.add('newToDoButton');
    titleDiv.textContent=e.target.innerText;
    // Create the h3 for ADDTASK
    
    
    
    //instead of appending child to mainCotnent(appending will keep on adding the h3& add task button) replace child everytime we click on the project button
    if (addItemDiv.childNodes.length>1) {
      addItemDiv.childNodes[0].innerText=e.target.innerText
    }
    
    else{
      h3Element.style.fontSize = 'medium';
    h3Element.style.paddingRight = '13px';
    h3Element.textContent = 'ADD TASK';
    // Create the + symbol
    
    iElement.classList.add('fas', 'fa-plus');
    iElement.style.padding = '2px';
    iElement.style.fontSize = 'small';
    newToDoButton.appendChild(h3Element);
    newToDoButton.appendChild(iElement);
    // addItemDiv
    addItemDiv.appendChild(titleDiv);
    addItemDiv.appendChild(newToDoButton);
      
    }
    const title=e.target.innerText
    if (!(tasksByProject[title])) {
      tasksByProject[title] = {};

    }
    if(mainContent.childNodes[2]){
      mainContent.childNodes[2].remove()
    }
    console.log(mainContent.childNodes,'after')
      const children =tasksByProject
      
      // children.forEach((child)=>{
      //   mainContent.appendChild(child)})
    newToDoButton.addEventListener('click',(event)=>{task(event)})
  }
  
});
}
export {project}


