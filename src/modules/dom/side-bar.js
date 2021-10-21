import {menuBar} from './menu-bar.js';
const sideBar = (function () {
  let sideBarDiv = document.createElement("div");
  let appNameDiv = document.createElement("div");
  sideBarDiv.setAttribute(
    "style",
    `background-color:#161616;height:100vh;width:250px; font-family: 'Helvetica',sans-serif;display:flex;flex-direction:column`
  );
  appNameDiv.innerText = "Don't Do";
  appNameDiv.setAttribute(
    "style",
    `background-color:#161616;width:250px;height:150px;
    color:white;font-size:50px;padding:20px;font-weight:300;
    display:flex;align-items:center;justify-content:center;`
  );
  sideBarDiv.appendChild(appNameDiv);
  sideBarDiv.appendChild(menuBar.menuDiv);
  return { sideBarDiv };
})();
export { sideBar };
