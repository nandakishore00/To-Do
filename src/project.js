//js file for creating the functionalities for sidebar
import {task} from './task.js'
function project(){
const forms = document.querySelector("form");
const mainContent=document.querySelector('.main-content')
const newButton = document.querySelector(".newButton");
const newTaskInput = document.querySelector('.newTaskInput');
const taskList = document.querySelector(".taskList");
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

console.log(newTaskItem)


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
    taskList.appendChild(newTaskItem);
    newTaskInput.value = '';
    forms.classList.add('hidden');
  
  }
}
//to handle main-content


function mainHeading(){
  
}

document.addEventListener('click',(e)=>
  { console.log(e.target,mainContent.childNodes[1])
    if(e.target===newTaskItem)
    {
      const newTaskButton = document.createElement('button');
    const addItemDiv=document.createElement('div');
    const titleDiv=document.createElement('div');
    newTaskButton.type = 'button';
    newTaskButton.classList.add('newTaskButton', 'addTask');
    titleDiv.textContent=e.target.innerText;
    // Create the h3 element
    const h3Element = document.createElement('h3');
    h3Element.style.fontSize = 'medium';
    h3Element.style.paddingRight = '13px';
    h3Element.textContent = 'ADD TASK';
    // Create the + symbol
    const iElement = document.createElement('i');
    iElement.classList.add('fas', 'fa-plus');
    iElement.style.padding = '2px';
    iElement.style.fontSize = 'small';
    newTaskButton.appendChild(h3Element);
    newTaskButton.appendChild(iElement);
    addItemDiv.appendChild(titleDiv);
    addItemDiv.appendChild(newTaskButton);
    addItemDiv.classList.add('mainheading')
    console.log(addItemDiv,'asdasdasd')
    var oldChild=document.createElement('div')
    //instead of appending child to mainCotnent(appending will keep on adding the h3& add task button) replace child everytime we click on the project button
    if (mainContent.childNodes.length>1) {
      oldChild=mainContent.childNodes[1]
      mainContent.replaceChild(addItemDiv,oldChild);
    }
    else{
      mainContent.appendChild(addItemDiv)
    }
    task();
      }
  });
}
export {project}
