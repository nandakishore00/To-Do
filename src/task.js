function task() {
    return new Promise((resolve) => {
      const addTask=document.querySelector('.addTask')
      const title = document.getElementById('title');
      const desc=document.querySelector("#description")
      const dueDate = document.getElementById('due-date');
      const priority=document.querySelector("#priority")
      const cancelButton=document.querySelector('.cancel')
      const toDoBox=document.querySelector('.toDoBox');
      const submitButton=document.querySelector('.submitBox')
      const toDoBoxCont=document.querySelector('.todo-Box-Container');
      addTask.addEventListener('click',()=>{
        console.log(toDoBox.classList)
          toDoBoxCont.style.backdropFilter='blur(2px)'; /*Blur effect on the background */
          toDoBox.classList.toggle('hidden');
      })
      cancelButton.addEventListener('click', (e) => {
          title.value = '';
          dueDate.value = '';
          toDoBoxCont.style.backdropFilter='blur(0px)'
          toDoBox.classList.toggle('hidden');
          e.preventDefault()
        });
      submitButton.addEventListener('click', (e) => {
        toDoBox.classList.toggle('hidden');
        e.preventDefault();
        resolve({
          title: title.value,
          description: desc.value,
          dueDate: dueDate.value,
          priority: priority.value
        });
      });
    });
  }
  export { task };
  
