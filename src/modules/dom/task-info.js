const taskInfo = (function(){
    let taskInfoDiv = document.createElement('div');
    taskInfoDiv.setAttribute('style','height:720px;width:440px;background-color:#161616;margin-top:120px;margin-left:40px;border-radius:25px;');
    let taskHeaderDiv = document.createElement('div');
    taskHeaderDiv.setAttribute('style',`width:440px;background-color:#252525;height:60px;border-radius:25px 25px 0px 0px;display:flex;justify-content:space-between;`)
    let taskDetailsHeaderDiv = document.createElement('div');
    taskDetailsHeaderDiv.setAttribute('style',`color:white;padding:20px;`);
    taskDetailsHeaderDiv.innerText = "TASK DETAILS";
    let markDoneBtn = document.createElement('div');
    markDoneBtn.setAttribute('style',`color:#76ff03;padding:20px;cursor:pointer;`);
    markDoneBtn.innerText = "Mark as Done";

    taskHeaderDiv.appendChild(taskDetailsHeaderDiv);
    taskHeaderDiv.appendChild(markDoneBtn);
    taskInfoDiv.appendChild(taskHeaderDiv);
    return {taskInfoDiv}
})()
export {taskInfo};