// import { tasksByProject } from './tasksByProject.js';
// import {task} from './task.js'
// export function toDo(e,taskData) {

//   const { title, description, dueDate, priority } = taskData;
//   const mainContent=document.querySelector('.main-content')
//   var todoList=document.querySelector('.todo-list')
 
//   if (!todoList) //adds all the to-do under 1 div tag
//   { todoList=document.createElement('div');}
//   const todoItem = document.createElement('div');
//   todoItem.classList.add('todo-item');
//   todoList.classList.add('todo-list'); // Correct method to add a class

//   // Create the title element
//   const titleElement = document.createElement('div');
//   titleElement.classList.add('title');
//   titleElement.textContent = title;
//   todoItem.appendChild(titleElement);
 
 
//   // Create the priority element
 
//   if (priority=='low'){todoItem.style.border= '2px solid red'};
//   if(priority=='medium'){todoItem.style.border='2px solid orange'};
//   if(priority=='high'){todoItem.style.border='2px solid green'}
  

//   // Create the description container
//   const descriptionContainer = document.createElement('div');
//   descriptionContainer.classList.add('description-container');

//   // Create the description element
//   const descriptionElement = document.createElement('div');
//   descriptionElement.classList.add('description');
//   descriptionElement.textContent = description;
//   descriptionContainer.appendChild(descriptionElement);
//   todoItem.appendChild(descriptionContainer);
//  // Create the due date element
//   const dateElement = document.createElement('div');
//   dateElement.classList.add('due-date');
//   dateElement.textContent =  `${dueDate}`;
//   todoItem.appendChild(dateElement);

//   // Create the edit button
//   const editButton = document.createElement('button');
//   editButton.classList.add('far','fa-edit');
//   todoItem.appendChild(editButton);
//   // Add an event listener to the edit button
//   editButton.addEventListener('click', () => {
//     // Call the task function with the existing values
//     task({
//       target: {
//         innerText: projectKey
//       }
//     }, {
//       title: titleElement.textContent,
//       description: descriptionElement.textContent,
//       dueDate: dateElement.textContent,
//       priority: priority
//     });
  
//     // Remove the current todo-item from the list
//     todoList.removeChild(todoItem);
  
//     // Update the tasksByProject object
//     tasksByProject[projectKey].value = tasksByProject[projectKey].value.filter(item => item !== todoList);
//   });
//   // 

//   // Create the delete button
//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add('fas','fa-trash');
//   todoItem.appendChild(deleteButton);
//   deleteButton.addEventListener('click', () => {
//     // Remove the current todo-item from the list
//     todoList.removeChild(todoItem);
  
//     // Update the tasksByProject object
//     tasksByProject[projectKey].value = tasksByProject[projectKey].value.filter(item => item !== todoList);
//   });

//   // Add an event listener to toggle the description container
//   todoItem.addEventListener('click', () => {
//     descriptionContainer.classList.toggle('hidden');
// });

// todoList.appendChild(todoItem);
// const projectKey = e.target.innerText;
// if (!tasksByProject[projectKey]) {
//   tasksByProject[projectKey] = {
//       title: projectKey,
//       value: []
//   };
// }

// tasksByProject[projectKey].value.push(todoList);
// mainContent.appendChild(todoList); 
//}




//function to create list of to-do tasks and display them in order
import { tasksByProject } from './tasksByProject.js';
import { task } from './toDoContainer.js';
export function toDo(e, taskData) {
    console.log('herer')
    const { title, description, dueDate, priority } = taskData;
    const mainContent = document.querySelector('.main-content');
    let todoList = document.querySelector('.todo-list');

    //adds all the to-do under 1 div tag
    if (!todoList) {
    todoList = document.createElement('div');}
    todoList.classList.add('todo-list');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = title;
    todoItem.appendChild(titleElement);

    if (priority === 'low') {
        todoItem.style.border = '2px solid red';
    } else if (priority === 'medium') {
        todoItem.style.border = '2px solid orange';
    } else if (priority === 'high') {
        todoItem.style.border = '2px solid green';
    }

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = description;
    descriptionContainer.appendChild(descriptionElement);
    todoItem.appendChild(descriptionContainer);

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

    // todoItem.addEventListener('click', () => {
    //     descriptionContainer.classList.toggle('hidden');
    // });

    todoList.appendChild(todoItem);

    const projectKey = e.target.parentNode.previousElementSibling.innerText
    if (tasksByProject.projectKey==null) {
        tasksByProject.projectKey = {
            title:title,
            desc:dueDate,
            dueDate:dueDate,
            priority:priority
        };
    }
    
    //tasksByProject[projectKey].value.push(todoItem);
    mainContent.appendChild(todoList);
    // Add event listener for the delete button
    deleteButton.addEventListener('click', (deleteEvent) => {
        deleteEvent.preventDefault();
        todoItem.remove();
        tasksByProject[projectKey].value = tasksByProject[projectKey].value.filter(item => item !== todoItem);
    });

    // Add event listener for the edit button
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
        
        titleElement.textContent = existingData.title;
        descriptionElement.textContent = existingData.description;
        dateElement.textContent = existingData.dueDate;
        if (existingData.priority === 'low') {
            todoItem.style.border = '2px solid red';
        } else if (existingData.priority === 'medium') {
            todoItem.style.border = '2px solid orange';
        } else if (existingData.priority === 'high') {
            todoItem.style.border = '2px solid green';
        }
        
        const projectData = tasksByProject[projectKey];
        projectData.value = projectData.value.filter(item => item !== todoItem);
        
    });
    console.log(tasksByProject,todoItem)

}

