//function to create list of to-do tasks and display them in order
import { tasksByProject } from './tasksByProject.js';
export function toDo(e,taskData) {
  const { title, description, dueDate, priority } = taskData;
  const mainContent=document.querySelector('.main-content')
  var todoList=document.querySelector('.todo-list')
  if (!todoList) //adds all the to-do under 1 div tag
  { todoList=document.createElement('div');}
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoList.classList.add('todo-list'); // Correct method to add a class

  // Create the title element
  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.textContent = title;
  todoItem.appendChild(titleElement);
 
 
  // Create the priority element
 
  if (priority=='low'){todoItem.style.border= '2px solid red'};
  if(priority=='medium'){todoItem.style.border='2px solid orange'};
  if(priority=='high'){todoItem.style.border='2px solid green'}
  

  // Create the description container
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');

  // Create the description element
  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = description;
  descriptionContainer.appendChild(descriptionElement);
  todoItem.appendChild(descriptionContainer);
 // Create the due date element
  const dateElement = document.createElement('div');
  dateElement.classList.add('due-date');
  dateElement.textContent =  `${dueDate}`;
  todoItem.appendChild(dateElement);

  // Create the edit button
  const editButton = document.createElement('button');
  
  editButton.classList.add('far','fa-edit');
  todoItem.appendChild(editButton);

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('fas','fa-trash');
  todoItem.appendChild(deleteButton);
  
  
  // Add an event listener to toggle the description container
  todoItem.addEventListener('click', () => {
    descriptionContainer.classList.toggle('hidden');
});

todoList.appendChild(todoItem);
const projectKey = e.target.innerText;
console.log(projectKey,tasksByProject)
if (!tasksByProject[projectKey]) {
    tasksByProject[projectKey] = {
        title: projectKey,
        value: []
    };
}
console.log(tasksByProject[projectKey],'to-dolistProject')
tasksByProject[projectKey].value.push(todoList);
mainContent.appendChild(todoList); 
}
