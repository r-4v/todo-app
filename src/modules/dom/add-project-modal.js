import projectModalElement from './add-project-modal.html'
import './add-project-modal.css';
import { createProjectLogic } from '../appLogic/create-project-logic';
const projectModal = (function(){
    
    let projectModalDiv = document.createElement('div'); 
    projectModalDiv.innerHTML = projectModalElement;
    console.log(projectModalElement);
    let overlayElement =projectModalDiv.querySelector(".overlay");
    let projectForm = projectModalDiv.querySelector("#add-project-form");
 
   // console.log(projectname);
   //console.log(`project form is ${projectForm}`);
    projectForm.addEventListener('submit',createProjectLogic.delegateProjectInfo);
    let cancelBtn = projectModalDiv.querySelector("#cancel");
    cancelBtn.addEventListener('click',closeProjectOverlay);
    function closeProjectOverlay(e){
        let overlayElement =  document.querySelector(".project-overlay");
        //console.log("ok");
        //console.log(overlayElement);
        overlayElement.setAttribute('style',`display:none;`);
        let modal = document.querySelector(".add-project-modal");
        modal.setAttribute('style', `display:none;`);
    }
    function displayProjectModal(){
        let overlayElement =  document.querySelector(".project-overlay");
        console.log(overlayElement);
        overlayElement.setAttribute('style','display:block');
        let modal = document.querySelector(".add-project-modal");
        modal.setAttribute('style','display:block');
        document.getElementById('project-name').focus();
    };

    return {projectModalDiv,overlayElement,closeProjectOverlay,displayProjectModal};
})()
export{projectModal}