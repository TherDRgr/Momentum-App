
var greeting = document.getElementById('greeting'),
    nameVal = document.getElementById("name");

nameVal.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    
    }})
      
      
      var storedName = localStorage.getItem("name");
     
        
        if (storedName) {

        greeting.textContent = greeting + storedName;
      }