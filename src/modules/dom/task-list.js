const taskList = (function () {
  let taskListDiv = document.createElement("div");
  taskListDiv.setAttribute(
    "style",
    `height:720px;width:440px;background-color:#161616;
    margin-top:120px;margin-left:40px;border-radius:25px;`
  );
  let nameEntryDiv = document.createElement("input");
  nameEntryDiv.setAttribute(
    "style",
    `height:40px;padding:10px;background-color:#414141;
    width:355px;border-radius:50px;position:relative;
    left:10px;top:660px;border:none;`
  );
  let addEntryDiv = document.createElement("div");
  addEntryDiv.setAttribute(
    "style",
    `height:40px;padding:10px;background-color:#76ff03;display:flex;
    justify-content:center;align-items:center;width:40px;position:relative;left:375px;
    top:620px;border-radius:20px;border:none;color:black;font-size:30px;font-weight:bold;cursor:pointer;`
  );
  addEntryDiv.innerText = "+";

  taskListDiv.append(nameEntryDiv);
  taskListDiv.appendChild(addEntryDiv);

  return { taskListDiv };
})();
export { taskList };
