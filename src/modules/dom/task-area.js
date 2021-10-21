import { createTask } from "./create-task-button";
import { taskList } from "./task-list";
import { taskInfo } from "./task-info";
const taskarea = (function(){
    let taskAreaElement = document.createElement('div');
    taskAreaElement.setAttribute('style',`display:flex;flex-grow:1;`);
     //right side create task button element 
     taskAreaElement.appendChild(taskList.taskListDiv);
     taskAreaElement.appendChild(taskInfo.taskInfoDiv);
    taskAreaElement.appendChild(createTask.createTaskBtn);
    
    return {taskAreaElement};
})();
export {taskarea};