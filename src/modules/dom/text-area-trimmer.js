function textAreaTrim(selectedDiv){
  // trims the text area without scroll bar and disable enter key 
    for (let i = 0; i < selectedDiv.length; i++) {
    selectedDiv[i].setAttribute("style", "height:" + (selectedDiv[i].scrollHeight) + "px;overflow-y:hidden;");
    selectedDiv[i].addEventListener("input", OnInput, false);
    selectedDiv[i].addEventListener("keypress",onKeyPress);
  }
  function onKeyPress(e){
    if((e.keyCode === 13)){
      e.preventDefault();
      console.log("hemlo");
    }
  }
  function OnInput(e) {
    if((e.target.value[e.target.value.length-1]) !== 10){
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
    console.log(e.target.value);
    console.log(e.target.value[e.target.value.length-1]);}
  }}
  export {textAreaTrim};