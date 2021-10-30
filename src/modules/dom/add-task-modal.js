import taskModalElement from './add-task-modal.html';
import { textAreaTrim } from './text-area-trimmer';
import './add-task-modal.css';
const taskModal = (function(){
    let taskModalDiv = document.createElement('div');
    taskModalDiv.innerHTML = taskModalElement;
    let selectedDiv = taskModalDiv.getElementsByTagName("textarea");
    textAreaTrim(selectedDiv);
    let overlayElement =taskModalDiv.querySelector(".overlay");
   
    //console.log(overlayElement)
    return {taskModalDiv,overlayElement};
})();
export {taskModal};