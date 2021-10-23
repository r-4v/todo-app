import taskDetails from './task-detail-area.html';
import './task-detail-area.css';

import { textAreaTrim } from './text-area-trimmer';
const taskInfo = (function(){
    let taskInfoDiv = document.createElement('div');
    taskInfoDiv.setAttribute('style',`height:720px;width:440px;
    background-color:#161616;margin-top:120px;margin-left:40px;
    border-radius:25px;display:flex;flex-direction:column;
    overflow:scroll;overflow-x:hidden;`);
    taskInfoDiv.setAttribute('id','task-info-div');
    taskInfoDiv.classList.add("scroll");
    let taskHeaderDiv = document.createElement('div');
    taskHeaderDiv.setAttribute('style',`width:440px;background-color:#252525;
    height:60px;border-radius:25px 25px 0px 0px;
    display:flex;justify-content:space-between;`)

    let taskDetailsHeaderDiv = document.createElement('div');
    taskDetailsHeaderDiv.setAttribute('style',`color:white;padding:20px;`);
    taskDetailsHeaderDiv.innerText = "TASK DETAILS";

    let markDoneBtn = document.createElement('div');
    markDoneBtn.setAttribute('style',`color:#76ff03;padding:20px;cursor:pointer;`);
    markDoneBtn.innerText = "Mark as Done";

    let taskDetailArea = document.createElement('div');
    taskDetailArea.setAttribute('style','flex-grow:1;border-radius:25px;display:flex;');
    let taskNameDiv = document.createElement('div');
    taskNameDiv.setAttribute('style',`width:90%; margin-left:10px;margin-top:10px;`);
    taskNameDiv.innerHTML = taskDetails ;
    let selectedDiv = taskNameDiv.getElementsByTagName("textarea");
    // console.log([...selectedDiv][0].value);
    textAreaTrim(selectedDiv);
   taskDetailArea.appendChild(taskNameDiv);
    taskHeaderDiv.appendChild(taskDetailsHeaderDiv);
    taskHeaderDiv.appendChild(markDoneBtn);
    taskInfoDiv.appendChild(taskHeaderDiv);
    taskInfoDiv.appendChild(taskDetailArea);
    return {taskInfoDiv}
})()
export {taskInfo};