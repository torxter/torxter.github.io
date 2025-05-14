function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setStylesheet() {

    var style = "style" + getRandomInt(1, 4) + ".css";

    document.getElementById("stylesheet").setAttribute("href", style);
}