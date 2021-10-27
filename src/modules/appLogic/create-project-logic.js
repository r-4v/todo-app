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
        this.reset();
        if(!checkIfProjectExists(projectName)){
            projectList.push(project);
            createTask.addSelectOptions(project.projectName,'projects');
            console.log(project);
            console.log(projectList);
            this.reset();
            projectModal.closeProjectOverlay();
        }
       
    }
    function checkIfProjectExists(projectName){
        
        let filteredList =projectList.filter((project)=> project.projectName === projectName);
        return filteredList.length !== 0 ? true:false;

      }
    
    return {delegateProjectInfo};
})();
export {createProjectLogic,projectList};
