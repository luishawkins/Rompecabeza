var piezas = document.getElementsByClassName('mobil');

var tamWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

for (var i = 0; i < piezas.length; i++) {
    piezas[i].setAttribute("width", tamWidh[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    //piezas[i].setAttribute("x", Math.floor((Math.random() * 10 + 1)); piezas[i].setAttribute("y", Math.floor((Math.random() * 409 + 1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");

}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentposY = 0;

function seleccionarElemento() {
    elementSelect = evt.target;
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosX = parseFloat(elementSelect.getAttrubute("x"));
    currentPosY = parseFloat(elementSelect.getAttrubute("y"));
    elementSelect.setAttribute("onmousemove", "moverelemento(evt)");
}

function moverelemento(evt) {
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;
    elementSelect.getAttrubute("x", currentPosX);
    elementSelect.getAttrubute("y", currentPosY);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
}

function deseleccionarElemento(evt) {
    if (elementSelect != 0) {

    }
}