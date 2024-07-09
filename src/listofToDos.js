

//function to create list of to-do tasks and display them in order
import { tasksByProject } from './tasksByProject.js';
import { task } from './toDoContainer.js';
export function updateTodoItem(todoItem, updatedData) {
    const titleElement = todoItem.querySelector('.title');
    const dateElement = todoItem.querySelector('.due-date');

    titleElement.textContent = updatedData.title;
    dateElement.textContent = updatedData.dueDate;
    if (updatedData.priority === 'low') {
        todoItem.style.border = '2px solid red';
    } else if (updatedData.priority === 'medium') {
        todoItem.style.border = '2px solid orange';
    } else if (updatedData.priority === 'high') {
        todoItem.style.border = '2px solid green';
    }

    const projectKey = document.querySelector('.mainheading div').textContent;
    const todoId = todoItem.getAttribute('data-id');
    const todoIndex = tasksByProject[projectKey].tasks.findIndex(item => String(item.id) === todoId);
    
    if (todoIndex !== -1) {
        tasksByProject[projectKey].tasks[todoIndex] = {
            ...tasksByProject[projectKey].tasks[todoIndex],
            ...updatedData
        };
    }
}
export function toDo(e, taskData) {
    
    const { title, description, dueDate, priority } = taskData;
    const mainContent = document.querySelector('.mainheading');
    const todoList = document.querySelector('.todo-list');
    const uniqueId = Date.now();
    //adds all the to-do under 1 div tag
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', uniqueId);
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

    todoList.appendChild(todoItem);
    console.log(mainContent.children[0])
    const projectKey = mainContent.children[0].innerHTML;
    if (!tasksByProject[projectKey]) {
        tasksByProject[projectKey] = { tasks: [] };
      } 
    tasksByProject[projectKey].tasks.push({
        id: uniqueId,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    });
    // Add event listener for the delete button
    deleteButton.addEventListener('click', (deleteEvent) => {
        deleteEvent.preventDefault();
        todoItem.remove();//need to remove the todoItem first in order to retrieve the id of that particualr item 
        const todoId = todoItem.getAttribute('data-id');
        const todoIndex = tasksByProject[projectKey].tasks.findIndex(item => String(item.id)=== todoId);
        tasksByProject[projectKey].tasks.splice(todoIndex, 1);
       
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
        
        task(editEvent,existingData);
        
    });

    


}
