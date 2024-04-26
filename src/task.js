import {toDo} from './to-do list.js'
  export function task() {
    var exportValues={};
    const addTask = document.querySelector('.addTask');
    const title = document.getElementById('title');
    const dueDate = document.getElementById('due-date');
    const desc = document.getElementById('description');
    const priority = document.getElementById('priority');
    const cancelButton = document.querySelector('.cancel');
    const toDoBox = document.querySelector('.toDoBox');
    const mainContent = document.querySelector('.main-content');
    const submitButton = document.querySelector('.submitBox');
    const toDoBoxCont = document.querySelector('.todo-Box-Container');
    const un = mainContent.childNodes[3]; //adds blur effect and to-do box's class
    const form = document.querySelector('#todo-form'); // Get the form element
    const requiredFields = form.querySelectorAll('[required]'); // Get all required fields
    //Function to toggle the submit button state
    function toggleSubmitButton() {
      let isValid = true;
  
      requiredFields.forEach((field) => {
        if (field.value.trim() === '') {
          isValid = false;
        }
        
      });
  
      submitButton.disabled = !isValid;
    }
  
    //Add event listeners to required fields
    requiredFields.forEach((field) => {
      field.addEventListener('input', toggleSubmitButton);
    });
  
    // Call the function initially to set the initial state
    toggleSubmitButton();
  
    addTask.addEventListener('click', (e) => {
      mainContent.appendChild(un)
      toDoBoxCont.style.backdropFilter = 'blur(2px)';
      toDoBox.classList.toggle('hidden');
      console.log('im clicked');
      e.preventDefault();
    });
  
    cancelButton.addEventListener('click', (e) => {
      // title.value = '';
      // dueDate.value = '';
      // description.value='';
      toDoBox.classList.toggle('hidden');
      mainContent.removeChild(un);
      e.preventDefault();
    });
  
    submitButton.addEventListener('click', (e) => {
      toDoBox.classList.toggle('hidden');
      mainContent.removeChild(un);
      e.preventDefault();
      exportValues = {
        title: title.value,
        description: desc.value,
        dueDate: dueDate.value,
        priority: priority.value,
      };
      
      toDo(exportValues);
    });
  }