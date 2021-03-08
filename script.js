document.addEventListener("DOMContentLoaded", function(event) {
    modal__navbar.addEventListener("click",function(e){
        e.preventDefault();
        var link = e.target;
        var id = link.getAttribute("href").substr(1);
        var element = document.getElementById(id); 
        setTimeout(function(){
            element.scrollIntoView(true);
        },350);
        
    });
  });

