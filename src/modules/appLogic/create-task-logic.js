import { createTask } from "../dom/create-task-button";
import { startPage } from "../dom/start-page-dom";
import { taskList } from "../dom/task-list";
import { todoFactory } from "./todo-factory";
let todoList = [];
function setTodoList(value){
  todoList = value;
}
function getTodoList(){
  return todoList;
}
const createTaskLogic = (function(){
    function delegateTaskInfo(e) {
        e.preventDefault();
        let taskFormData = new FormData(this);
        let taskName = taskFormData.get("task-name-2");
        let dueDate = taskFormData.get("due-date");
        let notes = taskFormData.get("notes");
        let projectName = taskFormData.get("project-name");
        if (!projectName){
          projectName = "Select Project";
      }

        //let bookExists = checkIfBookExists(bookName);
        /*if (!bookExists) {
          modal.setAttribute("style", "display:none");
          overlay.setAttribute("style", "display:none");
          this.reset();
          addBookToLibrary(author, bookName, pages, hasRead);
        }*/
       let task = todoFactory(taskName,dueDate,notes,projectName);
        console.log(task);
        console.log(typeof task.dueDate);
        this.reset();
        if (!checkIfTaskExists(task.taskName))
        {this.reset();
        createTask.closeOverlay();
        todoList.push(task);
        startPage.populateStorage();
        taskList.refreshTaskList();}
        

      }
      function checkIfTaskExists(taskName){
        
        let filteredList =todoList.filter((todo)=> todo.taskName === taskName);
        return filteredList.length !== 0 ? true:false;

      }
      
    return{delegateTaskInfo};
})();
export {createTaskLogic,todoList,setTodoList,getTodoList};