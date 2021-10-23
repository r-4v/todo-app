import { taskList } from "../dom/task-list";
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
       let task = {taskName,dueDate,notes,projectName};
        console.log(task);
        this.reset();
        appendTask(task);

      }
      function appendTask(task){
        let taskListItem = document.createElement('div');
          taskListItem.innerText = task.taskName;
          taskListItem.setAttribute('style',`color:white;font-weight:bold;font-size:18px;`);
          taskList.taskListDiv.insertBefore(taskListItem,taskList.nameEntryDiv);
      };
    return{delegateTaskInfo};
})();
export {createTaskLogic};