
export function toDo(taskData) {
   // Call the imported task function
   const {title,description}=taskData
  console.log('Task data (if available):', title,description);
  console.log('hielo')
  // if (taskData) { // Check if data is returned (meaning button was clicked)
  //   console.log('Title:', taskData.title); // Access title.value here
  //   console.log('Description:', taskData.description); // Access other properties
  //   // ... use the task data ...
  // } else {
  //   console.warn('No task data available from task.js (button might not be clicked)');
  // }
}


