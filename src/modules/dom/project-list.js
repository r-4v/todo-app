import {projectList} from "../appLogic/create-project-logic";
import { todoList } from "../appLogic/create-task-logic";
import { taskInfo } from "./task-info";
import {taskList} from "./task-list.js";
import "./project-list.css";
let projectsListDiv = document.createElement('div');
projectsListDiv.setAttribute('id',"projects-list");
projectsListDiv.setAttribute('style',`overflow:scroll;overflow-x:hidden;`)



function addProjectListItem(projectName){
    projectsListDiv.innerHTML="";
    projectList.map((project)=>{
      //console.log("henlo");
      let projectListItem = document.createElement('div');
      projectListItem.innerText = project.projectName;
      projectListItem.setAttribute('style',`display:flex;color:white;font-weight:bold;font-size:18px;cursor:pointer;margin:10px;justify-content:center;align-items:center;background:black;padding:10px;border-radius:10px; `);
      projectsListDiv.appendChild(projectListItem);
      projectListItem.addEventListener('click',displayProjectTasks);
});
}
function displayProjectTasks(e){
    refreshProjectTaskList(e);
}
function refreshProjectTaskList(e){
    console.log("refreshing list");
    console.log(todoList);
    taskList.taskListDiv.innerHTML="";
    console.log(e.target.innerText);
    let filteredTodoList = todoList.filter((todo)=> todo.projectName === e.target.innerText );
    console.log(filteredTodoList);
    filteredTodoList.map((todo)=>{
      //console.log("henlo");
      let taskListItem = document.createElement('div');
      taskListItem.innerText = todo.taskName;
      taskListItem.setAttribute('style',`color:white;font-weight:bold;font-size:18px;margin:20px;cursor:pointer;`);
      taskList.taskListDiv.appendChild(taskListItem);
      taskListItem.addEventListener('click',taskList.updateTaskInfo);
      taskInfo.hideTaskInfoDiv();
    })
  }

export{projectsListDiv,addProjectListItem};