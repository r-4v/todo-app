import { sideBar } from "./side-bar";
import { taskarea } from "./task-area";
import { projectList, setProjectList } from "../appLogic/create-project-logic";
import { setTodoList, todoList } from "../appLogic/create-task-logic";
import { taskList } from "./task-list";
import { addProjectListItem } from "./project-list";
import { createTask } from "./create-task-button";
const startPage = (function(){
    let body = document.body;
    //side bar element
    if(!localStorage.length){
        populateStorage();
        console.log(localStorage);
      }
      else{
        displayLocalStorage();
      }
      function populateStorage(){
       /* todoList.forEach((todo)=> {
            localStorage.setItem(`${todo.taskName}`,JSON.stringify(todo));
          })
        projectList.forEach((project)=>{
            localStorage.setItem(`${project.projectName}`,JSON.stringify(project));
        })*/
        localStorage.setItem(`todoList`,JSON.stringify(todoList));
        localStorage.setItem(`projectList`,JSON.stringify(projectList));
        console.log(localStorage);
      }
      function displayLocalStorage(){
        let tempList = [];
        let tempTodo = [];
        let tempProj= [];
       
          tempTodo = (JSON.parse(localStorage.getItem('todoList')));
          tempProj = (JSON.parse(localStorage.getItem('projectList')));
         
          
       
         
          console.log(tempTodo);
          console.log(tempProj);
          setTodoList(tempTodo);
          setProjectList(tempProj);
          console.log(todoList);
          console.log(projectList);
          taskList.refreshTaskList();
          addProjectListItem();
      }
     body.appendChild(sideBar.sideBarDiv);
     body.appendChild(taskarea.taskAreaElement);
   
    return {body,populateStorage,displayLocalStorage};
})();
export {startPage};