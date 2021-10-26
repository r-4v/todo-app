import taskDetails from './task-info.html';
import './task-info.css';
import { taskarea } from './task-area';
import { textAreaTrim } from './text-area-trimmer';
import { todoList } from '../appLogic/create-task-logic';
import { taskList } from './task-list';
const taskInfo = (function(){
    let taskNameBeforeChange;
    let taskInfoDiv = document.createElement('div');
    taskInfoDiv.setAttribute('style',`display:none`);
    taskInfoDiv.addEventListener("change",handleChange);
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
    function displayTaskInfoDiv(){
        taskInfo.taskInfoDiv.setAttribute('style', `height:720px;width:440px;
    background-color:#161616;margin-top:120px;margin-left:40px;
    border-radius:25px;display:flex;flex-direction:column;
    overflow:scroll;overflow-x:hidden;`);
    }
   
    function handleChange(e){
        let taskNameTextArea =  taskDetailArea.querySelector("#task-name-info-div");
        let dateField = taskDetailArea.querySelector('#date-picker');
        let priority = taskDetailArea.querySelector('#priority-select');
        let notes = taskDetailArea.querySelector("#notes");
        console.log(`taskNamebeforechange in handlechange is ${taskNameBeforeChange}`);
       let currentTask =  todoList.filter((todo)=> todo.taskName === taskNameBeforeChange)[0];
        console.log(currentTask);
         //search for taskListElement with taskNameBeforeChange
         Array.from(taskList.taskListDiv.children).filter((child)=> child.innerText === taskNameBeforeChange)[0].innerText = taskNameTextArea.value;
         
        currentTask.taskName = taskNameTextArea.value;
       // taskList.taskListDiv.firstChild.innerText = currentTask.taskName;
        currentTask.dueDate = dateField.value;
        currentTask.notes = notes.value;
        currentTask.priority = priority.value;
        console.log(priority.value);
       
        populateTaskInfoDiv(currentTask);
        console.log(todoList);
     
}
        
    
    function populateTaskInfoDiv(task){ 
       let taskNameTextArea =  taskDetailArea.querySelector("#task-name-info-div");
       taskNameBeforeChange = task.taskName;
       console.log(`taskNameBeforeChange = ${taskNameBeforeChange}`);
       taskNameTextArea.value = task.taskName;
       let dateField = taskDetailArea.querySelector('#date-picker');
       dateField.value = task.dueDate;
       //console.log(task.dueDate);
       let notes = taskDetailArea.querySelector("#notes");
       // console.log(notes);
        notes.value = task.notes;
        let priority = taskDetailArea.querySelector('#priority-select');
        priority.value = task.priority;
        console.log("fired update");
        
        
           // taskNameTextArea.addEventListener("change",taskNameChange);
           // dateField.addEventListener("change",dateFieldChange);
            //notes.addEventListener("keydown",notesChange);
           
           /*
            function taskNameChange(e){
               
               var prevTaskName = task.taskName;
            
                listItemEvent.target.innerText = taskNameTextArea.value;
                let prevTask = todoList.filter((todo)=> todo.taskName === task.taskName)[0];
                console.log(prevTask);
                prevTask.taskName = taskNameTextArea.value;
                //console.log(todoList);
                 //console.log(task);
                 
                 task.taskName = taskNameTextArea.value;
                console.log(task);
            } */
       
            /*function dateFieldChange(e){
                task.dueDate = dateField.value;
                console.log(task);
            }*/
          
            /*function notesChange(e){
                console.log("fired notechange");
                console.log(e);
                console.log(task);
                console.log(listItemEvent.target.innerText);
                //render();
                task.notes = notes.value;
                console.log(task);
            }*/
        
         // manageTaskInfoDiv();
    }
  


    return {taskInfoDiv,displayTaskInfoDiv,populateTaskInfoDiv};
})()
export {taskInfo};