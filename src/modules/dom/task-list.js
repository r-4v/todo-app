const taskList = (function(){
    let taskListDiv = document.createElement('div');
    taskListDiv.setAttribute('style','height:720px;width:440px;background-color:#161616;margin-top:120px;margin-left:40px;border-radius:25px;');
    return {taskListDiv}
})()
export {taskList};