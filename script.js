function prodDropdown() {
    var x = document.getElementById('prod').classList.toggle('show');
};

function comDropdown() {
    var x = document.getElementById('com').classList.toggle('show');
};

function conDropdown() {
    var x = document.getElementById('con').classList.toggle('show');
};


function menu() {
    let hamburger = document.querySelector(".hamburg");
    let attribute = hamburger.getAttribute("src");
    let navigationPanel = document.querySelector(".nav");

        if(attribute == "icon-hamburger.svg"){
            hamburger.setAttribute("src","icon-close.svg")
            navigationPanel.style.display = "grid"
        }else{
            hamburger.setAttribute("src", "icon-hamburger.svg")
            navigationPanel.style.display = "none";
        }
};
