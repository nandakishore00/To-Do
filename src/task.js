function task() {  
  var exportValues;
  const addTask=document.querySelector('.addTask')
  const  title = document.getElementById('title');
  const dueDate = document.getElementById('due-date');  
  const desc=document.getElementById('description');
  const priority=document.getElementById('priority')
  const cancelButton=document.querySelector('.cancel')
  const toDoBox=document.querySelector('.toDoBox');
  const mainContent=document.querySelector('.main-content')
  const submitButton=document.querySelector('.submitBox')
  const toDoBoxCont=document.querySelector('.todo-Box-Container');
  addTask.addEventListener('click',(e)=>{
    console.log('Clicked at:', new Date().toLocaleTimeString());
      toDoBoxCont.style.backdropFilter = 'blur(2px)';
      toDoBox.classList.toggle('hidden');
      console.log('im clicked');
      e.preventDefault()
  });
  cancelButton.addEventListener('click', (e) => {
      title.value = '';
      dueDate.value = '';
      toDoBox.classList.toggle('hidden');
      const un=mainContent.childNodes[3]
      mainContent.removeChild(un)//removes teh to-doBox container, so that we can access the add task button again
      mainContent.classList.remove('toBoxCont')
      e.preventDefault()
      console.log('Clicked at:', new Date().toLocaleTimeString());
      console.log('asda');
    });
  submitButton.addEventListener('click', (e) => {
    toDoBox.classList.toggle('hidden');
    mainContent.classList.remove('toBoxCont')
    const un=mainContent.childNodes[3]
    mainContent.removeChild(un)
    e.preventDefault();
    exportValues={
      title: title.value,
      description: desc.value,
      dueDate: dueDate.value,
      priority: priority.value
  };
  return exportValues;
  
})
}

//const taskExportValues = task();
export { task}
  
