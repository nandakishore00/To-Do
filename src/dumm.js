
import { toDo } from './to-do list.js'; 
export function task(existingValues = null) {
  const mainContent = document.querySelector('.main-content');
  // Remove existing to-do box container if it exists
  const existingTodoBoxContainer = document.querySelector('.todo-Box-Container');
  if (existingTodoBoxContainer) {
    mainContent.removeChild(existingTodoBoxContainer);
  }

  // Create the todo-Box-Container div
  const todoBoxContainer = document.createElement('div');
  todoBoxContainer.classList.add('todo-Box-Container');

  // Create the toDoBox div
  const toDoBox = document.createElement('div');
  toDoBox.classList.add('toDoBox', 'hidden');

  // Create the itemHeading div
  const itemHeading = document.createElement('div');
  itemHeading.classList.add('itemHeading');

  // Create the h3 element
  const heading = document.createElement('h3');
  heading.textContent = 'TO-DO ITEM';
  itemHeading.appendChild(heading);

  // Create the form div
  const formDiv = document.createElement('div');

  // Create the form element
  const form = document.createElement('form');
  form.id = 'todo-form';

  // Create the first form-group div
  const formGroup1 = document.createElement('div');
  formGroup1.classList.add('form-group');

  // Create the title input
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'title';
  titleInput.required = true;
  titleInput.placeholder = 'Title';

  // Create the description textarea
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = 'description';
  descriptionTextarea.name = 'description';
  descriptionTextarea.placeholder = 'Description';

  // Append the title input and description textarea to the first form-group div
  formGroup1.appendChild(titleInput);
  formGroup1.appendChild(descriptionTextarea);

  // Create the second form-group div
  const formGroup2 = document.createElement('div');
  formGroup2.classList.add('form-group');

  // Create the due-date input
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due-date';
  dueDateInput.name = 'due-date';
  dueDateInput.required = true;
  dueDateInput.placeholder = 'DD-MM-YYYY';
  // Create the priority select
  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  prioritySelect.name = 'priority';

  // Create the priority options
  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'Low';

  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'Medium';

  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.textContent = 'High';

  // Append the options to the priority select
  prioritySelect.appendChild(lowOption);
  prioritySelect.appendChild(mediumOption);
  prioritySelect.appendChild(highOption);

  // Append the due-date input and priority select to the second form-group div
  formGroup2.appendChild(dueDateInput);
  formGroup2.appendChild(prioritySelect);

  // Create the addCancelButtons div
  const addCancelButtons = document.createElement('div');
  addCancelButtons.classList.add('addCancelButtons');

  // Create the submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('submitBox');
  submitButton.textContent = 'Submit';

  // Create the cancel button
  const cancelButton = document.createElement('button');
  cancelButton.type = 'submit';
  cancelButton.classList.add('submitBox');
  cancelButton.textContent = 'Cancel';

  // Append the submit and cancel buttons to the addCancelButtons div
  addCancelButtons.appendChild(submitButton);
  addCancelButtons.appendChild(cancelButton);

  // Append the form-group divs and addCancelButtons div to the form
  form.appendChild(formGroup1);
  form.appendChild(formGroup2);
  form.appendChild(addCancelButtons);

  // Append the form to the formDiv
  formDiv.appendChild(form);

  // Append the itemHeading and formDiv to the toDoBox
  toDoBox.appendChild(itemHeading);
  toDoBox.appendChild(formDiv);

  // Append the toDoBox to the todoBoxContainer
  todoBoxContainer.appendChild(toDoBox);

  // Populate the form with existing values if they are provided
  if (existingValues) {
    titleInput.value = existingValues.title;
    descriptionTextarea.value = existingValues.description;
    dueDateInput.value = existingValues.dueDate;
    prioritySelect.value = existingValues.priority;
  }

  // Append the todoBoxContainer to the main content
  const newToDoButton = document.querySelector('.newToDoButton');
  newToDoButton.addEventListener('click', (e) => {
    console.log('im also clicked')
    // Append the todoBoxContainer to the main container
    newToDoButton.disabled=true
    mainContent.appendChild(todoBoxContainer);
    toDoBox.classList.toggle('hidden');
    e.preventDefault();

  });
  cancelButton.addEventListener('click', (e) => {
    titleInput.value = '';
    dueDateInput.value = '';
    descriptionTextarea.value = '';
    toDoBox.classList.toggle('hidden');
    mainContent.removeChild(todoBoxContainer);
    e.preventDefault();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskData = {
      title: titleInput.value,
      description: descriptionTextarea.value,
      dueDate: dueDateInput.value,
      priority: prioritySelect.value,
    };
    toDo(e, taskData);
    toDoBox.classList.toggle('hidden');
    mainContent.removeChild(todoBoxContainer);
  });
}

