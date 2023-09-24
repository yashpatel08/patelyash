function changeClass() {
    const element = document.getElementById("toggle");
 
    if (element) { // Check if the element exists
       element.addEventListener("click", function () {
          if (element.className === "toggle_container") {
             element.className = "toggle_container-open";
          } else {
             element.className = "toggle_container";
          }
       });
    }
 }  
 export default changeClass;