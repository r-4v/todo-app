
import taskDetails from './task-info.html';
import './task-info.css';
import { textAreaTrim } from './text-area-trimmer';
import { todoList,setTodoList } from '../appLogic/create-task-logic';
import { taskList } from './task-list';
import { createTask } from './create-task-button';
import { projectList,setProjectList } from '../appLogic/create-project-logic';
import { startPage } from './start-page-dom';

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
    markDoneBtn.addEventListener('click',markAsDone);

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
    function hideTaskInfoDiv(){
        taskInfo.taskInfoDiv.setAttribute(`style`,'display:none');
    }
    let deleteBtn = taskDetailArea.querySelector("#delete-task");
    deleteBtn.addEventListener('click',deleteTask);
   function deleteTask(){
       
    console.log(`todo list after removing task${todoList}`);
    setTodoList(todoList.filter((todo) => todo.taskName !== taskNameBeforeChange));
   taskList.refreshTaskList();
   hideTaskInfoDiv();
  
   }
   function markAsDone(){
    let currentTask =  todoList.filter((todo)=> todo.taskName === taskNameBeforeChange)[0];
    currentTask.isDone = "yes";
    taskList.refreshTaskList();
    hideTaskInfoDiv();
   }
    function handleChange(e){
        let taskNameTextArea =  taskDetailArea.querySelector("#task-name-info-div");
        let dateField = taskDetailArea.querySelector('#date-picker');
        let priority = taskDetailArea.querySelector('#priority-select');
        let notes = taskDetailArea.querySelector("#notes");
        let selectedProject = taskDetailArea.querySelector("#projects-info-div");
        console.log(`Selected project is ${selectedProject.value}`);
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
        currentTask.projectName = selectedProject.value;
        console.log(`project name is ${selectedProject.value}`);
        startPage.populateStorage();
        console.log(priority.value);
       
        populateTaskInfoDiv(currentTask);
        console.log(todoList);
     
}
/*function taskInfoaddSelectOptions(projectName){
    let selectInput = document.querySelector("#projects-info-div");
    let newProjectOption = document.createElement("option");
    newProjectOption.setAttribute('value',`${projectName}`);
    newProjectOption.innerText = projectName;
    newProjectOption.setAttribute('value',`${projectName}`);
    selectInput.appendChild(newProjectOption);
    
}*/
    
    function populateTaskInfoDiv(task){ 
       // taskInfoaddSelectOptions(task.projectName);
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

        let selectedProject =  taskDetailArea.querySelector('#projects-info-div');
        //selectedProject.innerHTML ="";
        addProjectsTaskInfo(task);
        selectedProject.value = task.projectName;
        
        console.log(` is ${selectedProject.value}`);
       // createTask.addSelectOptions(project.projectName,'projects-info-div');
       
        
        console.log(selectedProject);
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
    function addProjectsTaskInfo(task){
        let selectedProject =  taskDetailArea.querySelector('#projects-info-div');
        selectedProject.value = task.projectName;
        let optionArray = [];
        Array.from(selectedProject.querySelectorAll("option")).forEach((option)=>{
            optionArray.push(option.value);
        });
      // console.log(optionArray);
        projectList.map((project)=> {
            console.log(project.projectName);
            if(optionArray.indexOf(project.projectName)=== -1){
            let newProjectOption = document.createElement("option");
            newProjectOption.setAttribute('value',`${project.projectName}`);
            newProjectOption.innerText = project.projectName;
            selectedProject.appendChild(newProjectOption);}
        })
        
       // console.log(optionArray);
    }
  


    return {taskInfoDiv,displayTaskInfoDiv,populateTaskInfoDiv,hideTaskInfoDiv,deleteTask};
})();

export {taskInfo};
