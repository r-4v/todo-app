import { taskInfo } from "./task-info";
import { todoList } from "../appLogic/create-task-logic";
const taskList = (function () {
  let taskListWrapper = document.createElement('div');
  taskListWrapper.setAttribute('style',`margin-top:120px;margin-left:40px;`);
  let taskListDiv = document.createElement("div");
  taskListDiv.setAttribute(
    "style",
    `height:720px;width:440px;background-color:#161616;
    border-radius:25px 25px 0px 0px;overflow:scroll;overflow-x:hidden;`
  );
 
  taskListDiv.classList.add("scroll");
  let nameEntryWrapper = document.createElement('div');
  nameEntryWrapper.setAttribute('style',`display:flex;column-gap:10px;width:440px;background-color:#161616;
  border-radius:0px 0px 25px 25px;`)

  let nameEntryDiv = document.createElement("div");
  nameEntryDiv.setAttribute(
    "style",
    `height:60px;padding:10px;text-align:center;font-size:30px;align-items:center;
    width:440px;border-radius:50px;border:none;margin-left:10px;font-weight:bold;color:white;`
  );
  nameEntryDiv.innerText = "Task Board";
//position:relative;left:10px;top:660px;
//position:relative;left:375px;top:620px;

  /*let addEntryDiv = document.createElement("div");
  addEntryDiv.setAttribute(
    "style",
    `height:40px;padding:10px;background-color:#76ff03;display:flex;
    justify-content:center;align-items:center;width:40px;border-radius:20px;border:none;color:black;font-size:30px;font-weight:bold;cursor:pointer;`
  );*/
  //addEntryDiv.innerText = "+";
  taskListWrapper.appendChild(taskListDiv);
  nameEntryWrapper.appendChild(nameEntryDiv);
  //nameEntryWrapper.appendChild(addEntryDiv);
  taskListWrapper.appendChild(nameEntryWrapper);
  function refreshTaskList(){
    console.log("refreshing list");
    console.log(todoList);
    taskList.taskListDiv.innerHTML="";
    todoList.map((todo)=>{
      //console.log("henlo");
      let taskListItem = document.createElement('div');
      taskListItem.innerText = todo.taskName;
      taskListItem.setAttribute('style',`color:white;font-weight:bold;font-size:18px;margin:20px;cursor:pointer;`);
      taskList.taskListDiv.appendChild(taskListItem);
      taskListItem.addEventListener('click',updateTaskInfo);
    })
  }
  /*function appendTask(task){
    
  };*/
  function updateTaskInfo(listItemEvent){
    taskInfo.displayTaskInfoDiv();
    let taskToDisplay = listItemEvent.target.innerText;
    let task = todoList.filter((todo)=> todo.taskName === taskToDisplay)[0];
    console.log("here");
    console.log(task);
    console.log(todoList);
    taskInfo.populateTaskInfoDiv(task,listItemEvent)
    
  }
 
  return { taskListWrapper,taskListDiv ,nameEntryDiv,refreshTaskList};
})();
export {taskList};
