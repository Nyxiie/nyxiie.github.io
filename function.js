function checkConsole(){
    if (i === 20) {
        document.getElementById('qwertz2').innerHTML = "<font face=\"verdana\"><font color=\"rebeccapurple\">SX@UI~#: </font>console reset<br></font>";
        i=1;
    }
}
function keybase() {
    document.getElementById('qwertz2').innerHTML += "<font face=\"verdana\"><font color=\"rebeccapurple\">SX@UI~#: </font>keybase loaded</font><br>";
    i += 1;
    checkConsole();
}
function gba() {
    document.getElementById('qwertz2').innerHTML += "<font face=\"verdana\"><font color=\"rebeccapurple\">SX@UI~#: </font>emulator loaded</font><br>";
    i += 1;
    checkConsole();
}
function binarylolis() {
    document.getElementById('qwertz2').innerHTML += "<font face=\"verdana\"><font color=\"rebeccapurple\">SX@UI~#: </font>binarylolis loaded</font><br>";
    i += 1;
    checkConsole();
}

