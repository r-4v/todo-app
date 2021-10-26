function projectFactory(projectName){
    let projectSpecificTaskList = [];
    return {projectName,projectSpecificTaskList};
}
export {projectFactory};