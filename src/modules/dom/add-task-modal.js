import taskModalElement from './add-task-modal.html';
import { textAreaTrim } from './text-area-trimmer';
import './add-task-modal.css';
const taskModal = (function(){
    let taskModalDiv = document.createElement('div');
    taskModalDiv.innerHTML = taskModalElement;
    let selectedDiv = taskModalDiv.getElementsByTagName("textarea");
    textAreaTrim(selectedDiv);
    console.log(taskModalDiv);
    return {taskModalDiv};
})();
export {taskModal};