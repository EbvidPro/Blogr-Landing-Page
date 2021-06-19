function prodDropdown() {
    var x = document.getElementById('prod').classList.toggle('show');
}

function comDropdown() {
    var x = document.getElementById('com').classList.toggle('show');
}

function conDropdown() {
    var x = document.getElementById('con').classList.toggle('show');
}
window.onclick = function(event) {
    if (!event.target.matches('.product')) {
        var dropdowns = document.getElementById('prod');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let hamburger = document.querySelector('.hamburg');
hamburger.addEventListener('click', (e) => {
    let attribute = hamburger.getAttribute('src');
    let navigationPanel = document.querySelector('.nav');
    if (attribute == "images/icon-hamburger.svg"){
        hamburger.setAttribute("src","images/icon-close.svg")
        navigationPanel.style.display = "grid"
    } else {
        hamburger.setAttribute("src", "images/icon-hamburger.svg")
        navigationPanel.style.display = "none";
    }
})
