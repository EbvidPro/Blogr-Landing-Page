function prodDropdown() {
    var x = document.getElementById('prod');
    if (x.style.display === 'block') {
        return x.style.display = 'none';
    } else {
        return x.classList.toggle('show');
    }
}

function comDropdown() {
    var x = document.getElementById('com');
    if (x.style.display === 'block') {
        return x.style.display = 'none';
    } else {
        return x.classList.toggle('show');
    }
}

function conDropdown() {
    var x = document.getElementById('con');
    if (x.style.display === 'block') {
        return x.style.display = 'none';
    } else {
        return x.classList.toggle('show');
    }
}

