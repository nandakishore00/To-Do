// import {task} from './task.js'
export function random(e,mainContent,tasksByProject) {
    console.log(mainContent)
    mainContent.childNodes[1].remove()
    const title=e.target.innerText
    console.log(tasksByProject[title].value)

    mainContent.appendChild(tasksByProject[title].value)
    // const { title, description, dueDate, priority }=exportValues
    // console.log(title, description, dueDate, priority)
    // const tasks=e.target.innerText
    // // tasksByProject[tasks].
    // const heading=tasksByProject[tasks].title
    // const newTaskButton = document.createElement('button');
    // const addItemDiv=document.createElement('div');
    // const titleDiv=document.createElement('div');
    // newTaskButton.type = 'button';
    // newTaskButton.classList.add('newTaskButton', 'addTask');
    // titleDiv.textContent=heading;
    // // Create the h3 element
    // const h3Element = document.createElement('h3');
    // h3Element.style.fontSize = 'medium';
    // h3Element.style.paddingRight = '13px';
    // h3Element.textContent = 'ADD TASK';
    // // Create the + symbol
    // const iElement = document.createElement('i');
    // iElement.classList.add('fas', 'fa-plus');
    // iElement.style.padding = '2px';
    // iElement.style.fontSize = 'small';
    // newTaskButton.appendChild(h3Element);
    // newTaskButton.appendChild(iElement);
    // addItemDiv.appendChild(titleDiv);
    // addItemDiv.appendChild(newTaskButton);
    // addItemDiv.classList.add('mainheading')
    //   mainContent.appendChild(addItemDiv)
}



// import {task} from './task.js'
// export function random(e,mainContent) {
// const title=e.target.innerText  
//     const newTaskButton = document.createElement('button');
//     const addItemDiv=document.createElement('div');
//     const titleDiv=document.createElement('div');
//     newTaskButton.type = 'button';
//     newTaskButton.classList.add('newTaskButton', 'addTask');
//     titleDiv.textContent=title;
//     // Create the h3 element
//     const h3Element = document.createElement('h3');
//     h3Element.style.fontSize = 'medium';
//     h3Element.style.paddingRight = '13px';
//     h3Element.textContent = 'ADD TASK';
//     // Create the + symbol
//     const iElement = document.createElement('i');
//     iElement.classList.add('fas', 'fa-plus');
//     iElement.style.padding = '2px';
//     iElement.style.fontSize = 'small';
//     newTaskButton.appendChild(h3Element);
//     newTaskButton.appendChild(iElement);
//     addItemDiv.appendChild(titleDiv);
//     addItemDiv.appendChild(newTaskButton);
//     addItemDiv.classList.add('mainheading')
    
//     //instead of appending child to mainCotnent(appending will keep on adding the h3& add task button) replace child everytime we click on the project button
   
    
//       mainContent.appendChild(addItemDiv)
    
//     task();
// }