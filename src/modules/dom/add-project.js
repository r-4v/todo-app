import projectModalElement from './add-project.html'
import './add-project.css';
const projectModal = (function(){
    
    let projectModalDiv = document.createElement('div');
    
    projectModalDiv.innerHTML = projectModalElement;
    let overlayElement =projectModalDiv.querySelector(".overlay");

    return {projectModalDiv,overlayElement};
})()
export{projectModal}