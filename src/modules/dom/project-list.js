import {projectList,setProjectList} from "../appLogic/create-project-logic";
import { setTodoList, todoList } from "../appLogic/create-task-logic";
import { taskInfo } from "./task-info";
import {taskList} from "./task-list.js";
import "./project-list.css";
import { startPage } from "./start-page-dom";
let projectsListDiv = document.createElement('div');
projectsListDiv.setAttribute('id',"projects-list");
projectsListDiv.setAttribute('style',`overflow:scroll;overflow-x:hidden;`);

function addProjectListItem(projectName){
    projectsListDiv.innerHTML="";
    if(projectList){
    projectList.forEach((project)=>{
      //console.log("henlo");
      let projectListItem = document.createElement('div');
      let projectListItemWrapper = document.createElement('div');
      let projectDeleteButton = document.createElement('button');
      projectListItem.innerText = project.projectName;
      projectListItemWrapper.setAttribute('style',`display:flex;align-items:center;flex-wrap:wrap;`);
      projectDeleteButton.setAttribute(`style`,`height:20px;padding:5px;background-color:red;color:white;font-size:10px;font-weight:bold;border-radius:5px;border:none;margin-left:auto;margin-right:30px;`);
      projectDeleteButton.innerText ="Delete";
      projectDeleteButton.addEventListener('click',deleteProject);
      projectListItem.setAttribute('style',`display:flex;color:white;font-weight:bold;font-size:18px;cursor:pointer;margin:10px;justify-content:center;align-items:center;background:black;padding:10px;border-radius:10px; `);
      projectListItemWrapper.appendChild(projectListItem);
      projectListItemWrapper.appendChild(projectDeleteButton);
      projectsListDiv.appendChild(projectListItemWrapper);
      projectListItem.addEventListener('click',displayProjectTasks);
});}
}
function deleteProject(e){
  let projectToDelete = e.target.parentNode.firstElementChild.innerText;
  //console.log(projectToDelete);
  console.log(projectList);
  setProjectList(projectList.filter((project)=> project.projectName !== projectToDelete));
  //localStorage.removeItem(`${projectToDelete}`);
  refreshProjectList();
  deleteTasksOfProject(projectToDelete);
  console.log(projectList);

}
function deleteTasksOfProject(projectName){
  console.log(todoList);
  setTodoList(todoList.filter((todo)=> todo.projectName !== projectName));
  startPage.populateStorage();
  taskList.refreshTaskList();
  taskInfo.hideTaskInfoDiv();
  console.log(todoList);
}
function refreshProjectList(){
  addProjectListItem();
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