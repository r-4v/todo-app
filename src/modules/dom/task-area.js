import { createTask } from "./create-task-button";
import { taskList } from "./task-list";
import { taskInfo } from "./task-info";
import { taskModal } from "./add-task-modal";
const taskarea = (function(){
    let taskAreaElement = document.createElement('div');
    taskAreaElement.setAttribute('style',`display:flex;flex-grow:1;`);
     //right side create task button element 
     taskAreaElement.appendChild(taskList.taskListWrapper);
     taskAreaElement.appendChild(taskInfo.taskInfoDiv);
     taskAreaElement.appendChild(taskModal.taskModalDiv);
    taskAreaElement.appendChild(createTask.createTaskBtn);
   
    return {taskAreaElement};
})();
export {taskarea};