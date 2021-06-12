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

