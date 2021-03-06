import './task-area-style.css';
import taskModalElement from './add-task-modal.html';
import { taskModal } from './add-task-modal';
import { createTaskLogic } from '../appLogic/create-task-logic';


import { projectList,setProjectList,getProjectList, createProjectLogic} from '../appLogic/create-project-logic';

const createTask = (function(){
    let createTaskBtn = document.createElement('button');
    let overlayElement = taskModal.overlayElement;
    console.log("query element");
    console.log(overlayElement);
    
    createTaskBtn.innerText = " + Create a Task";
    createTaskBtn.setAttribute('style',`padding:11px 60px;height:40px;background-color:#76ff03;border-radius:20px;cursor:pointer;color:black;font-weight:bold;`);
    createTaskBtn.classList.add("task-button");
    createTaskBtn.addEventListener('click',addTaskfn);
    createTaskBtn.addEventListener('click',addProjectOptions,{once:true});
    function addProjectOptions(e){
        let tempProj = (JSON.parse(localStorage.getItem('projectList')));
        if (tempProj){
        for (let i = 0; i < tempProj.length; i++) {
        console.log("ok");
        console.log(tempProj[i].projectName);
        addSelectOptions(tempProj[i].projectName);
        
      }}
    }
    //console.log(overlayElement);
    function addTaskfn(e){
        let overlayElement =  document.querySelector(".overlay");
        console.log(overlayElement);
        overlayElement.setAttribute('style','display:block');
        let modal = document.querySelector(".modal");
        modal.setAttribute('style','display:block');
        document.getElementById("task-name-2").focus();
        let form = document.getElementById("task-form");
      
        //console.log(form);
        form.addEventListener("submit",createTaskLogic.delegateTaskInfo);

    }
    function addSelectOptions(projectName){
        let selectInput = document.querySelector(`#projects`);
        let newProjectOption = document.createElement("option");
        newProjectOption.setAttribute('value',`${projectName}`);
        newProjectOption.innerText = projectName;
        selectInput.appendChild(newProjectOption);
        
    }
    
    /*overlayElement =  addTaskfn();
    console.log(overlayElement);*/
   overlayElement.addEventListener('click',closeOverlay);
   
    
  function closeOverlay(e){
        let overlayElement =  document.querySelector(".overlay");
        //console.log("ok");
        //console.log(overlayElement);
        overlayElement.setAttribute('style',`display:none;`);
        let modal = document.querySelector(".modal");
        modal.setAttribute('style', `display:none;`);

    }
    return{createTaskBtn,closeOverlay,addSelectOptions};
})();
export{createTask};













