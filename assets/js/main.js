let hamburguer = document.getElementById("hamburger");
let menu = document.getElementById("cabecalho");
let main = document.querySelector("main");
let body = document.querySelector("body");
let wwidth = window.innerWidth;
let wheight = window.innerHeight;
let count = false;


hamburguer.addEventListener('click', function() {
    if(count == true){
        hamburguer.classList.remove("animationHamburguer");
        menu.classList.remove("show");
        if(wwidth >= 768){
            main.classList.remove("mainOpenedMenuD");
            body.style.backgroundColor = "#FAFAFA";
        } else {            
            main.style.marginLeft = "0";
            main.style.marginRight = "0";
        }
        
        count = false;
    } else if(count == false){
        hamburguer.classList.add("animationHamburguer");
        menu.classList.add("show");
        if(wwidth >= 768){
            main.classList.add("mainOpenedMenuD");
            if(body.classList.contains("home")){
                body.style.backgroundColor = "#20336B";
            } else if(body.classList.contains("sobre")){
                body.style.backgroundColor = "#F9CE1C";
            } else if(body.classList.contains("contato")){
                body.style.backgroundColor = "#EE001E";
            }
        } else {
            main.style.marginLeft = "-250px";
            main.style.marginRight = "250px";
        }

        count = true;
    }
});
