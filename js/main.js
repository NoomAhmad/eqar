
   function Menuphone() {
       var x = document.getElementById("mynav");
       if (x.className === "menu") {
           x.className += " responsive";
       } 
       else {
           x.className = "menu";
       }
   }

   // Get the modal
   var modal = document.getElementById('loginWrapper');

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == model) {
       model.style.display = "none";
       }
   }


