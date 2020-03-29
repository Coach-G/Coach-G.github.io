function myFunction() {
    var checkBox = document.getElementById("defaultUnchecked");
    var text = document.getElementById("completedArea");
    if (checkBox.checked == true){
      text.style.backgroundColor = "RGB(0, 255, 26)";
    } else {
       text.style.backgroundColor = "white";
    }
  }




/*
function changeColor() {

    let completedArea = document.getElementById("completedArea");
    let checkMark = document.getElementById("defaultUnchecked");
    if(completedArea) {
        completedButton.style.backgroundColor = "RGB(0, 255, 26)";

    } else {
        completedButton.style.backgroundColor = "white";
    }
}
*/
