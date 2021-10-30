import { projectFactory } from "./project-factory.js";
import { projectModal } from "../dom/add-project-modal.js";
import { addProjectListItem } from "../dom/project-list.js";
import { startPage } from "../dom/start-page-dom.js";
import { createTask } from "../dom/create-task-button.js";
let projectList;
projectList = [];
function setProjectList(value) {
  projectList = value;
}
function getProjectList() {
  return projectList;
}
const createProjectLogic = (function () {
  let b = true;

  function delegateProjectInfo(e) {
    do {
      
      b = false;
    } while (b);
    e.preventDefault();
    let projectFormData = new FormData(this);
    let projectName = projectFormData.get("project-name");
    let project = projectFactory(projectName);
    this.reset();
    if (!checkIfProjectExists(projectName)) {
      projectList.push(project);
      startPage.populateStorage();
      addProjectListItem(project.projectName);
      createTask.addSelectOptions(project.projectName,'projects');
      console.log("here");
      console.log(projectList);

      console.log(project);
      console.log(projectList);
      this.reset();
      projectModal.closeProjectOverlay();
    }
  }
  function checkIfProjectExists(projectName) {
    let filteredList = projectList.filter(
      (project) => project.projectName === projectName
    );
    return filteredList.length !== 0 ? true : false;
  }

  return { delegateProjectInfo };
})();
export { createProjectLogic, projectList, setProjectList, getProjectList };
