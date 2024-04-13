function task(){
const addTask=document.querySelector('.addTask')
const form = document.getElementById('todo-form')
const titleInput = document.getElementById('title');
const dueDateInput = document.getElementById('due-date');
const cancelButton=document.querySelector('.cancel')
const toDoBox=document.querySelector('.toDoBox')
const toDoBoxCont=document.querySelector('.todo-Box-Container');
addTask.addEventListener('click',()=>{
    toDoBoxCont.style.backdropFilter='blur(2px)'; /*Blur effect on the background */
    toDoBox.classList.toggle('hidden');
})
cancelButton.addEventListener('click', (e) => {
    titleInput.value = '';
    dueDateInput.value = '';
    toDoBoxCont.style.backdropFilter='blur(0px)'
    toDoBox.classList.toggle('hidden');
    e.preventDefault()
  });
submitButton.addEventListener('click',()){
    
}
}

export {task}
