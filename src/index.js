import createToDo from './to-do list'
console.log('a');
const contentdiv=document.querySelector(".content");
const innerH1=document.createElement("h1");
innerH1.textContent="HELLO WORD";
contentdiv.appendChild(innerH1);

const toDo=createToDo("Project","To-do list","14/04/2024","Medium","delete task","create task","customize task")