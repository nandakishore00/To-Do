function task(){
    const addTask=document.querySelector('.newTaskButton')
console.log(addTask)
const toDoBox=document.querySelector('.toDoBox')
addTask.addEventListener('click',()=>{
    toDoBox.classList.toggle('hidden');
})
}

// export {addTask}
export default task()