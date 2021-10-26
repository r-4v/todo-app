import {projectFactory} from "./project-factory.js";
import {projectModal} from "../dom/add-project-modal.js";
import {createTask} from "../dom/create-task-button.js";
let projectList = [];
const createProjectLogic = (function(){
    
    function delegateProjectInfo(e){
        e.preventDefault();
        let projectFormData = new FormData(this);
        let projectName =  projectFormData.get('project-name');
        let project = projectFactory(projectName);
        projectList.push(project);
        createTask.addSelectOptions(project.projectName);
        console.log(project);
        console.log(projectList);
        this.reset();
        projectModal.closeProjectOverlay();
    }
    
    return {delegateProjectInfo};
})();
export {createProjectLogic};
