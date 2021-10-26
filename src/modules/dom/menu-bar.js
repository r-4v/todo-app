import { sub } from "date-fns";
import './menu-bar-style.css';
import { projectModal } from "./add-project-modal.js";
const menuBar = (function(){
    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('style',"flex:1; color:white;");
    let subMenuDiv = document.createElement('div');
    let allTasksDiv = document.createElement('div');
    let todayTaskDiv = document.createElement('div');
    let weekTaskDiv = document.createElement('div');
    let projectsDiv = document.createElement('div');
   let addProjectBtn = document.createElement('button');
   let projectsDivWrapper = document.createElement('div');
    let projectsListDiv = document.createElement('div');
    
    allTasksDiv.innerText = "All tasks";
    todayTaskDiv.innerText = "Today";
    weekTaskDiv.innerText = "This Week";
    projectsDiv.innerText = "Projects";
  
    projectsDivWrapper.appendChild(projectsDiv);
    projectsDivWrapper.appendChild(addProjectBtn);
    addProjectBtn.setAttribute('style',`width:30px;background-color:transparent;color:white;font-size:25px;font-weight:bold;padding:0px;border:none;margin-left:auto;`);
    addProjectBtn.innerText = '+';
    addProjectBtn.addEventListener('click',projectModal.displayProjectModal);
    //addProjectBtn.addEventListener('click',projectModal.openProjectModal);
    projectsDivWrapper.setAttribute('style','display:flex;column-gap:20px;align-items:center;');

    subMenuDiv.classList.add('sub-menu');
    subMenuDiv.setAttribute('style','display:flex; padding:30px;row-gap:30px;flex-direction:column;')

    subMenuDiv.appendChild(allTasksDiv);
    subMenuDiv.appendChild(todayTaskDiv);
    subMenuDiv.appendChild(weekTaskDiv);
    subMenuDiv.appendChild(projectsDivWrapper);
    menuDiv.appendChild(subMenuDiv);
    menuDiv.appendChild(projectsListDiv);
    return{menuDiv};
})();
export{menuBar};