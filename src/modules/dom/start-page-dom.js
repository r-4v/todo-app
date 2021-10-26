import { sideBar } from "./side-bar";
import { taskarea } from "./task-area";
const startPage = (function(){
    let body = document.body;
    //side bar element
     body.appendChild(sideBar.sideBarDiv);
     body.appendChild(taskarea.taskAreaElement);
   
    return {body};
})();
export {startPage};