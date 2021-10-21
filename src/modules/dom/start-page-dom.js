import { sideBar } from "./side-bar";
const startPage = (function(){
    let body = document.body;
    //side bar element
    body.appendChild(sideBar.sideBarDiv);

    //right side create task button element 
    return {body};
})();
export {startPage};