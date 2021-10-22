import './task-area-style.css';
const createTask = (function(){
    let createTaskBtn = document.createElement('button');
    createTaskBtn.innerText = " + Create a Task";
    createTaskBtn.setAttribute('style',`padding:11px 60px;height:40px;background-color:#76ff03;border-radius:20px;cursor:pointer;color:black;font-weight:bold;`);
    createTaskBtn.classList.add("task-button");
    return{createTaskBtn};
})();
export{createTask};