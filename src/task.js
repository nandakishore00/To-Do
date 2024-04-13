function task(){
const addTask=document.querySelector('.addTask')

const toDoBox=document.querySelector('.toDoBox')
const toDoBoxCont=document.querySelector('.todo-Box-Container');
console.log(toDoBox,addTask)
addTask.addEventListener('click',()=>{
    toDoBoxCont.style.backdropFilter='blur(2px)'; /*Blur effect on the background */
    toDoBox.classList.toggle('hidden');
})
}

export {task}
