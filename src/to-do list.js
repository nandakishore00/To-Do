export function toDo(taskData) {
  const { title, description, dueDate, priority } = taskData;
  console.log('Task data (if available):', title, description);

  const mainContent = document.querySelector('.main-content');
  const todoList = document.createElement('div');
  todoList.classList.add('todo-list');

  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  const todoDiv= document.createElement('div');
  todoDiv.classList.add('todoDiv')
  // Create the title element
  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.textContent = title;
  todoItem.appendChild(titleElement);

  // Create the due date element
  const dateElement = document.createElement('div');
  dateElement.classList.add('due-date');
  dateElement.textContent =  `${dueDate}`;
  todoDiv.appendChild(dateElement);

  // Create the priority element
  const priorityElement = document.createElement('div');
  priorityElement.classList.add('priority');
  priorityElement.textContent = `Priority: ${priority}`;
  if (priority=='low'){todoItem.style.border= '2px solid red'};
  if(priority=='medium'){todoItem.style.border='2px solid orange'};
  if(priority=='high'){todoItem.style.border='2px solid green'}
  todoDiv.appendChild(priorityElement);

  // Create the description container
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container', 'hidden');

  // Create the description element
  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = description;
  descriptionContainer.appendChild(descriptionElement);
  todoDiv.appendChild(descriptionContainer);
  todoItem.appendChild(todoDiv)
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
  todoDiv.appendChild(buttonsContainer);

  // Add an event listener to toggle the description container
  todoItem.addEventListener('click', () => {
    descriptionContainer.classList.toggle('hidden');
  });

  todoList.appendChild(todoItem);
  mainContent.appendChild(todoList);
}