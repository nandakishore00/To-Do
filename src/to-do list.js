
//js file to list all the to-do tasks in main content 
export function toDo(taskData) {
  // Call the imported task function
  const {title,description,dueDate,priority}=taskData
  console.log('Task data (if available):', title,description);
  console.log('hielo')
  // to-do list.js
  // Create a new list item
  const mainContent=document.querySelector('.main-content')
  const todoList=document.createElement('div');
  todoList.classList.add('todo-list')
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  // Create the title element
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  listItem.appendChild(titleElement);

  // Create the date element
  const dateElement = document.createElement('p');
  dateElement.textContent = `Due Date: ${dueDate}`;
  listItem.appendChild(dateElement);

  // Create the priority element
  const priorityElement = document.createElement('p');
  priorityElement.textContent = `Priority: ${priority}`;
  listItem.appendChild(priorityElement);

  // Create the description container
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container', 'hidden');

  // Create the description element
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  descriptionContainer.appendChild(descriptionElement);
  listItem.appendChild(descriptionContainer);

  // Create the buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  // Create the edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  buttonsContainer.appendChild(editButton);

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  buttonsContainer.appendChild(deleteButton);

  listItem.appendChild(buttonsContainer);

  // Add an event listener to toggle the description container
  listItem.addEventListener('click', () => {
    descriptionContainer.classList.toggle('hidden');
  });

  // Add the list item to the to-do list
  console.log(listItem,todoList)
  listItem.classList.add('styles')
  todoList.appendChild(listItem)

  mainContent.appendChild(todoList)
  // todoList.appendChild('styles')

  // todoList.appendChild(listItem);
}


