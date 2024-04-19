import { taskExportValues  as exportValues} from './task.js';
function toDo(){
    if (exportValues){
        console.log(exportValues.title);
    console.log(exportValues.description);
    console.log(exportValues.dueDate);
    console.log(exportValues.priority);
    }
}
export {toDo}