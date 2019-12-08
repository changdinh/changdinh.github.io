document.addEventListener("DOMContentLoaded",function(){
    var hamburger = document.querySelector(".menuWrapper .bars i.hamburger"),
    closeTab = document.querySelector(".menuWrapper .bars i.closeTab"),
    menu = document.querySelector(".menuWrapper ul.listMenu");
    
        
    hamburger.addEventListener("click",function(){
        hamburger.classList.add("hidden");
        closeTab.classList.add("show");
        menu.classList.remove("hidden");
        menu.classList.add("show");
    })

    closeTab.addEventListener("click",function(){
        hamburger.classList.remove("hidden");
        closeTab.classList.remove("show");
        menu.classList.add("hidden");
    })
    
},false)