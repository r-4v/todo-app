import { createTask } from "../dom/create-task-button";
import { taskList } from "../dom/task-list";
import { todoFactory } from "./todo-factory";
let todoList = [];
const createTaskLogic = (function(){
    function delegateTaskInfo(e) {
        e.preventDefault();
        let taskFormData = new FormData(this);
        let taskName = taskFormData.get("task-name-2");
        let dueDate = taskFormData.get("due-date");
        let notes = taskFormData.get("notes");
        let projectName = taskFormData.get("project-name");

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
        createTask.closeOverlay();
        todoList.push(task);
        taskList.refreshTaskList();
        

      }
      
    return{delegateTaskInfo};
})();
export {createTaskLogic,todoList};