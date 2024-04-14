import { task } from './task.js';

task().then((formData) => {
  console.log(formData.title);
  console.log(formData.description);
  console.log(formData.dueDate);
  console.log(formData.priority);
});