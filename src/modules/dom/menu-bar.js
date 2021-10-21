import { sub } from "date-fns";
import './menu-bar-style.css';
const menuBar = (function(){
    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('style',"flex:1; color:white;");
    let subMenuDiv = document.createElement('div');
    let allTasksDiv = document.createElement('div');
    let todayTaskDiv = document.createElement('div');
    let weekTaskDiv = document.createElement('div');
    let projectsDiv = document.createElement('div');
    let projectsListDiv = document.createElement('div');
    
    allTasksDiv.innerText = "All tasks";
    todayTaskDiv.innerText = "Today";
    weekTaskDiv.innerText = "This Week";
    projectsDiv.innerText = "Projects";

    subMenuDiv.classList.add('sub-menu');
    subMenuDiv.setAttribute('style','display:flex; padding:30px;row-gap:30px;flex-direction:column;')

    subMenuDiv.appendChild(allTasksDiv);
    subMenuDiv.appendChild(todayTaskDiv);
    subMenuDiv.appendChild(weekTaskDiv);
    subMenuDiv.appendChild(projectsDiv);
    menuDiv.appendChild(subMenuDiv);
    menuDiv.appendChild(projectsListDiv);
    return{menuDiv};
})();
export{menuBar};